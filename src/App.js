import React from 'react';
import './App.css';
import List from './List';




function App(props) {
  const { store } = props;

  const listCards = store.lists.map(list => {
    return list.cardIds.map(cardId => {
      return store.allCards[cardId];
    });
  });


  const listHeader = store.lists.map(list => {
    return <List header={list.header} listCards={listCards} />;
  })

  return (
    <main className="App">
      <header className = "App-header">
        <h1>Trelloyes!</h1>
      </header>
      {listHeader}
      <div className="App-list">
      
      </div>
    </main>
  );
  
}

export default App;