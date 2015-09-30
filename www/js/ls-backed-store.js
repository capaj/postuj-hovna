export default function LSBackedStore(name, store){
  window.addEventListener('beforeunload', function() {
    localStorage.setItem(name, JSON.stringify(store));
  });
  Object.assign(store, JSON.parse(localStorage.getItem(name)));
}