# TestPilot - AI-Powered Test Automation Platform

TestPilot is an AI-powered test automation platform that can generate, execute, and analyze test cases automatically using cutting-edge AI technology.

## Features

- **Multi-Input Test Generation**: Generate test cases from Figma designs, images, PDFs, URLs, or textual descriptions
- **AI-Powered Test Execution**: Automatically execute test cases using AI-driven validation
- **Real-Time Analytics**: Track test history, filter results, and visualize performance metrics
- **Modern UI**: Clean, responsive interface with a focus on usability
- **Dark Mode Support**: Seamless switching between light and dark themes

## Tech Stack

- **Frontend**: React, Next.js, Tailwind CSS
- **AI Integration**: Vercel AI SDK with OpenAI GPT-4o
- **Data Visualization**: Recharts
- **Deployment**: Vercel or GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- OpenAI API key (for AI features)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/testpilot.git
   cd testpilot
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```
   OPENAI_API_KEY=your_openai_api_key
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Deployment

#### Vercel Deployment

The easiest way to deploy this application is through Vercel:

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Configure the environment variables in the Vercel dashboard
4. Deploy the application

#### GitHub Pages Deployment

For GitHub Pages deployment, follow the instructions in [GITHUB_DEPLOYMENT.md](GITHUB_DEPLOYMENT.md).

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | Your OpenAI API key for AI-powered test generation | Yes |
| `NEXT_PUBLIC_APP_URL` | The URL of your application | Yes |

## Project Structure

- `/app` - Next.js app router pages and layouts
- `/components` - Reusable React components
- `/hooks` - Custom React hooks
- `/lib` - Utility functions and libraries
- `/public` - Static assets

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

