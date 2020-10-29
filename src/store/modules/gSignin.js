import gauth from '@/auth/gauth'

const state = {
    signedIn: false,
    profile: null,
    clientId: gauth.clientId,
    GoogleAuth: false
}


const mutations = {
    signIn:(state, profile) => {
            state.signedIn = true;
            if (profile) {
                state.profile = profile;
        }
    },
    /*loading(state, loadingState) {
        state.logging = loadingState;
    },*/
    getAuthInstance:(state, authInstance) => {
        if (!state.GoogleAuth) {
          state.GoogleAuth = authInstance;
        }
      },
    signOut:(state) => {
        state.signedIn = false;
        //state.loading = false;
        state.profile = null;
    },
    
}

const actions = {
    initGapi:({ commit }) => {
        return new Promise((resolve, reject) => {
            gapi.load('auth2', {
                callback: () => {
                    gapi.auth2.init({
                        client_id: state.clientId,
                        //api_key: state.apiKey,
                        scope: state.scope,
                        //immediate: true
                      }).then(() => {
                        gapi.client.load('https://sheets.googleapis.com/$discovery/rest?version=v4').then(() => {
                          resolve();
                        });
                      });
                }
            });
            })
        },
        assignUser:({commit,state}) => {
            

            let GoogleAuth = gapi.auth2.getAuthInstance();
            
            if (GoogleAuth.currentUser.get().getBasicProfile()) {
                return commit('signIn', GoogleAuth.currentUser.get().getBasicProfile());
            }
            
        },
        isSignedIn:({ dispatch, commit, state }) => {
            return new Promise((resolve, reject) => {
                dispatch('initGapi').then(() => {
                    commit('getAuthInstance', gapi.auth2.getAuthInstance());
                    let GoogleAuth = gapi.auth2.getAuthInstance();
                    //let user = auth.isSignedIn.get();
                try {
                    if (GoogleAuth.isSignedIn.get() && state.profile) {
                        dispatch('assignUser').then(() => {
                            commit('signIn');
                        });
                    }
                    resolve(GoogleAuth.isSignedIn.get() && state.profile);
                } catch (e) {
                    console.log(e);
                    reject(e);
                }
                });
            })
        },
        signIn:({ dispatch, commit }) => {
            console.log('signing in...');
            return new Promise((resolve, reject) => {
                dispatch('initGapi').then(async () => {
                    await gapi.auth2.getAuthInstance().signIn().then({
                        scope: 'profile email'
                    }).then((response) => {
                        if (response) {
                            dispatch('assignUser').then(() => {
                                resolve(true);
                                let GoogleAuth = gapi.auth2.getAuthInstance();
                                var profile = GoogleAuth.currentUser.get().getBasicProfile();
                                document.getElementById('signintext').src = profile.getImageUrl();
                            }).catch((err) => {
                                dispatch('signOut').then(() => {
                                    reject();
                                });
                            })
                        }
                    })
                })
            })       
                    
        },
        signOut:({ commit }) => {
            console.log('signing out...');
            return new Promise((resolve, reject) => {
            if (gapi && gapi.auth2 && gapi.auth2.getAuthInstance()) {
                gapi.auth2.getAuthInstance().signOut().then(() => {
                commit('signOut');
                resolve();
                }, () => {
                commit('signOut');
                resolve();
                });
            }
            else {
                commit('signOut');
                resolve();
            }
            })
        }
}

export default{
    namespaced: true,
    state,
    
    mutations,
    actions
}