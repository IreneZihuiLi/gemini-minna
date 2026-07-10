const COLLECTION_KEY = "minna_collection";

function getCollection() {
  return wx.getStorageSync(COLLECTION_KEY) || [];
}

function isCollected(ja) {
  return getCollection().some((item) => item.ja === ja);
}

function toggleCollection(sentence) {
  const collection = getCollection();
  const index = collection.findIndex((item) => item.ja === sentence.ja);

  if (index >= 0) {
    collection.splice(index, 1);
  } else {
    collection.unshift({
      ...sentence,
      id: `COL-${Date.now()}`
    });
  }

  wx.setStorageSync(COLLECTION_KEY, collection);
  return index < 0;
}

module.exports = {
  getCollection,
  isCollected,
  toggleCollection
};
