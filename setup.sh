#!/bin/bash

# প্রোজেক্ট ডিরেক্টরিতে যান
cd electricity-bill-calculator

# Node.js এবং npm চেক করুন
if ! command -v node &> /dev/null
then
    echo "Node.js ইন্সটল করা নেই। ইন্সটল করা হচ্ছে..."
    sudo apt-get update
    sudo apt-get install -y nodejs npm
else
    echo "Node.js ইন্সটল করা আছে।"
fi

# Tailwind CSS ইন্সটল করুন
echo "Tailwind CSS ইন্সটল করা হচ্ছে..."
npm install tailwindcss

# TypeScript ইন্সটল করুন
echo "TypeScript ইন্সটল করা হচ্ছে..."
npm install -g typescript

# TypeScript কম্পাইল করুন
echo "TypeScript কম্পাইল করা হচ্ছে..."
tsc script.ts

# ব্রাউজারে ওপেন করার জন্য একটি মেসেজ দেখান
echo "সেটআপ সম্পূর্ণ! এখন index.html ফাইলটি ব্রাউজারে ওপেন করুন।"