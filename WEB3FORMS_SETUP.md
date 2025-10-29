# 📧 Web3Forms Setup Guide

Your contact form is now integrated with Web3Forms! Follow these simple steps to activate it:

## Step 1: Get Your Free Access Key

1. Go to https://web3forms.com
2. Click "Create Access Key" (no signup required!)
3. Enter your email: **aryanchhabra13.ac@gmail.com**
4. Check your email and verify
5. Copy your Access Key (it looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

## Step 2: Add Your Access Key

1. Open `src/components/ContactDimension.jsx`
2. Find line 33 where it says:
   ```javascript
   access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
   ```
3. Replace `'YOUR_WEB3FORMS_ACCESS_KEY'` with your actual key from Step 1

**Example:**
```javascript
access_key: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
```

## Step 3: Test It!

1. Deploy your site to Vercel
2. Fill out the contact form
3. Check your email inbox - you should receive the message!

## ✅ What's Already Done

- ✅ Form submission logic implemented
- ✅ Success/error messages
- ✅ Loading state while sending
- ✅ Form auto-clears after success
- ✅ Email subject line configured

## 🔒 Security Note

Your access key will be visible in your frontend code, but that's okay! Web3Forms is designed this way. The key is domain-restricted and rate-limited, so it's safe for public use.

---

**Need help?** Check Web3Forms documentation: https://docs.web3forms.com

