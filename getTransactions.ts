import React from 'react';

interface Transaction {
  id: string; // "transaction_93ox_wCmF4AmCB9cMqyWM"
  amount: string; // "200.00"
  date: string; // "2022-01-20"
  title: string; // "Bank Transfer"
  description: string; // "ACH Transfer #0933";
  type: 'deposit' | 'debit';
  status: 'pending' | 'completed';
}
