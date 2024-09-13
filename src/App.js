import './App.css';
const { Deck } = require('kenton-doc') 

function App() {
  const deck = new Deck()
  const deckEmojis = (deck) => {
    let newList = []
    for ( let card of deck ) {
        newList.push(card.toEmoji())
    }
    return newList
  }

  return (
    <main>
      <h1>Deck</h1>
      <div className='deck'>
        {deckEmojis(deck.deck)}
      </div>
      {deck.shuffle()}
      <h1>Shuffled Deck</h1>
      <div className='deck'>
        {deckEmojis(deck.deck)}
      </div>
      <div className='deck'>
        {deck.discard(deck.draw())}
      </div>
      <h1>Deck after discard method</h1>
      <div className='deck'>
      {deckEmojis(deck.deck)}
      </div>
      <h1>Discard Pile</h1>
      <div className='deck'>
      {deckEmojis(deck.discardPile)}
      </div>
      <div className='deck'>
      {deck.addCard(deck.discardPile[0])}
      </div>
      <h1>Deck after addCard method</h1>
      <div className='deck'>
      {deckEmojis(deck.deck)}
      </div>
      <div className='deck'>
        {deck.discard(deck.draw())}
      </div>
      <div className='deck'>
      {deck.shuffleCard(deck.discardPile[0])}
      </div>
      <h1>Deck after shuffleCard method</h1>
      <div className='deck'>
      {deckEmojis(deck.deck)}
      </div>
      <div className='deck'>
        {deck.discard(deck.draw())}
      </div>
      <div className='deck'>
        {console.log(deck.discardPile)}
      {deck.slipCard(deck.discardPile[2])}
      </div>
      <h1>Deck after slipCard method</h1>
      <div className='deck'>
      {deckEmojis(deck.deck)}
      </div>
      <h1>Reveal Method</h1>
      <div className='deck'>
      {deck.reveal().toEmoji()}
      </div>

      
    </main>
  );
}

export default App;
