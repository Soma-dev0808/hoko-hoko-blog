// import { useMemo } from 'react';
// import initializeStore from '../store/configureStore';

// let store;

// /**
//  * getOrCreateStore
//  * storeの作成か取得を行う
//  */
// function getOrCreateStore(preloadedState) {
//     let newStore = store ?? initializeStore(preloadedState);

//     if (preloadedState && store) {
//         newStore = initializeStore({
//             ...store.getState(),
//             ...preloadedState,
//         });
//         // 現在のstoreをリセット
//         store = undefined;
//     }

//     if (!store) store = newStore;

//     return newStore;
// }

// /**
//  * useStore
//  * ReduxStoreを返すカスタムHooks
//  */
// const useStore = (initialState) => {
//     const newStore = useMemo(() => getOrCreateStore(initialState), [initialState]);
//     return newStore;
// };

// export default useStore;
