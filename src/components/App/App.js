import './App.css';

import Profile from '../Profile/Profile';
import user from '../../assets/data/user.json';

import Statistics from '../Statistics/Statistics';
import statisticalData from '../../assets/data/statistical-data.json';

import FriendList from '../FriendsList/FriendList';
import friends from '../../assets/data/friends.json';

import TransactionHistory from '../Transactions/TransactionHistory';
import transactions from '../../assets/data/transactions.json';

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
