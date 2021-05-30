import React from 'react';
import 'modern-normalize/modern-normalize.css';
import './main.css';
import Profile from './components/profile/profile';
import user from './data/user.json';
import Statistics from './components/statistic/statistic';
import statisticalData from './data/statistical-data.json';
import FriendList from './components/friends/friend-list';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import TransactionHistory from './components/transaction/transaction-history';

const App = () => (
  <div>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />

    <Statistics title="Upload stats" stats={statisticalData} />

    <FriendList friends={friends} />

    <TransactionHistory items={transactions} />
  </div>
);

export default App;
