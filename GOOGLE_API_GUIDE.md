# How to Create a Google API Key

1. **Go to the Google Cloud Console**
   Navigate to [https://console.cloud.google.com/](https://console.cloud.google.com/) and sign in with your Google account.

2. **Create a New Project (or select an existing one)**
   - Click on the project drop-down menu at the top of the page.
   - Click **New Project**.
   - Enter a Project Name and click **Create**.

3. **Enable APIs and Services**
   - In the sidebar, go to **APIs & Services** > **Library**.
   - Search for the API you need (e.g., "Maps JavaScript API", "YouTube Data API", etc.) and click on it.
   - Click the **Enable** button.

4. **Create Credentials**
   - In the sidebar, go to **APIs & Services** > **Credentials**.
   - Click on the **+ CREATE CREDENTIALS** button at the top.
   - Select **API key** from the dropdown menu.
   - A dialog will appear with your newly created API key.

5. **Restrict Your API Key (Recommended)**
   - Click **Restrict Key** on the dialog.
   - Under **Application restrictions**, choose where your key can be used (e.g., HTTP referrers for websites).
   - Under **API restrictions**, select "Restrict key" and choose the specific APIs you enabled in step 3.
   - Click **Save**.

6. **Use the API Key**
   - Copy the API key.
   - Add it to your `.env` file as `GOOGLE_API_KEY=your_api_key_here`.
