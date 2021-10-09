import './App.css';

import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';

import FriendList from './components/FriendsList/FriendList';
import friends from './components/FriendsList/friends.json';

import TransactionHistory from './components/Transactions/TransactionHistory';
import transactions from './components/Transactions/transactions.json';

function App() {
  return (
    <div className="App">
      <span className="TaskNumber">#1. SocialProfile</span>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <span className="TaskNumber">#2. UploadStatistics</span>
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <span className="TaskNumber">#3. FriendsList</span>
      <FriendList friends={friends} />
      <span className="TaskNumber">#4. TransactionHistory</span>
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
