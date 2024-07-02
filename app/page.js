"use client"
// app/page.js
import React from 'react';
import Home from './Home';
//import fetchSpreadsheet from '../components/fetchSpreadsheet';

const googleSheetsUrl =
  'https://docs.google.com/spreadsheets/d/14lmnc_GTJzWvLatvU9QQIBO9_Xg1fKjBEMYU12FsZuk/export?gid=0&format=csv';

export default async function Page() {
  let posts = [];
  let loading = true;

  try {
    posts = await fetchSpreadsheet(googleSheetsUrl);
    loading = false;
  } catch (error) {
    console.error(error);
  }

  return <Home posts={posts} loading={loading} />;
}
