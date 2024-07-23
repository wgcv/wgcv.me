interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  // {
  //   title: 'A Search Engine',
  //   description: `What if you could look up any information in the world? Webpages, images, videos
  //   and more. Google has many features to help you find exactly what you're looking
  //   for.`,
  //   imgSrc: '/static/images/google.png',
  //   href: 'https://www.google.com',
  // },
  {
    title: 'Tab Recall Simplified',
    description: `Project distills large LLMs into compact models for efficient 
    web page summarization. Leverages transfer learning with T5-small (60.5M params), 
    Pegasus-xsum (570M), and BART-large (406M). Custom dataset from diverse sources 
    (nytimes.com, GitHub) used for fine-tuning.`,
    imgSrc: '/static/images/projects/hero_tidy_tabs.png',
    href: 'https://huggingface.co/spaces/wgcv/Tidy-Tabs-Titles',
  },
  {
    title: 'Social Media Analysis for the Mayor of Guayaquil 2019 with LSTM models',
    description: `Using NLP and deep learning to analyze 11,230 tweets from Guayaquil's 
    2019 mayoral candidates. Implemented an LSTM model for sentiment classification, 
    achieving 85% accuracy in political tweets analysis.`,
    imgSrc: '/static/images/projects/lstm_classification_mayor_2019.jpg',
    href: 'https://huggingface.co/spaces/wgcv/Tidy-Tabs-Titles',
  },

  {
    title: 'From Spanish Audio to Insight: Text Transcription and Sentiment Analysis',
    description: `Utilized Facebook's wav2vec2-large-xlsr-53 for Spanish audio-to-text 
    transcription and the Robertuito model for sentiment classification (positive, neutral, negative), 
    integrating Transformers and Gradio for a comprehensive solution.`,
    imgSrc: '/static/images/projects/voice2text2classification.jpg',
    href: 'https://huggingface.co/spaces/wgcv/Voices2Text2SentimentalAnalysis-es',
  },
  {
    title: 'Custom Firmware for the Artillery 3D Printer',
    description: `This C-language firmware for Artillery Sidewinder printers upgrades 
    functionality with M600 filament change, bed leveling, Gcode console, PID 
    temperature control, and more, adding premium features to a mid-tier 3D printer 
    without hardware modifications.`,
    imgSrc: '/static/images/projects/rar_tft_tirmware_artyller3d.jpg',
    href: 'https://github.com/wgcv/RAWR-TFT-Firmware-Artillery3D',
  },
  {
    title:
      'AI-Powered Whiteboard: Predicts handwritten letters and converts to text with TensorFlow.js',
    description: `An AI-powered whiteboard using TensorFlow.js, Canvas, HTML, and JavaScript. 
    Real-time CNN model for accurate handwritten letter classification and autocorrection.`,
    imgSrc: '/static/images/projects/aiboard_html_animation.gif',
    href: 'https://github.com/wgcv/AIboard',
  },
]

export default projectsData
