export default function getAllVegetalAPI(
  firebase,
  listCollection,
  listaArray,
  setAll
) {
  try {
    firebase
      .collection(listCollection)
      .get()
      .then((res) => {
        res.docs.forEach((doc) => {
          listaArray.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setAll(listaArray);
      });
  } catch (err) {
    console.log('error:', err);
  }
}
