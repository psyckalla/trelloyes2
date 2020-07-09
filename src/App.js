import React from 'react';
import './App.css';
import List from './List';




function App(props) {
  const { store } = props;
 
  const listCards = store.lists.map(list => {
    return list.cardIds})
  console.log(listCards);
  const individualLists = listCards.map((list, index) =>{
    return list[index];
  })
  console.log(individualLists);


  const cardContent = store.allCards.a.content;




  const listHeader = store.lists.map(list => {
    return <List header={list.header} cardContent={cardContent} />
});
  return (
    <main className="App">
      <header className = "App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {listHeader}
      </div>
    </main>

  );
}

export default App;