// Page content moved here from app/[section]/page.js and app/page.js.
// The wording is unchanged. Edit text here, not in the page files.

export const focusAreas = [
  ['Computer vision', 'Medical imaging and image–text comparison.'],
  ['Language models', 'Fine-tuning and evaluating text generation.'],
  ['Geospatial analysis', 'Satellite imagery and vegetation time series.'],
]
export const skills = [
  { title: 'Machine learning', copy: 'Model training and evaluation across image, text, and tabular tasks.', items: ['PyTorch', 'scikit-learn', 'XGBoost', 'LightGBM', 'Transformers', 'PEFT'] },
  { title: 'Data and analysis', copy: 'Data preparation, analysis, and reporting.', items: ['Python', 'SQL', 'Pandas', 'NumPy', 'SciPy', 'Power BI', 'Plotly'] },
  { title: 'Geospatial', copy: 'Satellite imagery, GIS, and time-series workflows.', items: ['ArcGIS Pro', 'Google Earth Engine', 'Sentinel-2', 'LSTM', 'Jupyter', 'Git / GitHub'] },
  { title: 'Application development', copy: 'Interfaces and APIs for data projects.', items: ['Streamlit', 'FastAPI', 'Flask', 'Django', 'Supabase', 'Azure AI Services'] },
]

export const experience = [
  {
    period: 'July 2026 - October 2026',
    role: 'Machine Learning Intern',
    organisation: 'FlyRank',
    location: 'Applied machine learning internship',
    highlights: [
      'Completed five of five internship assignments, including baseline action scoring on anonymized Google Search data and a data-contract exercise.',
      'Prepared a capstone project that was under review at the end of the internship.',
    ],
  },
  {
    period: 'May 2026 - Present',
    role: 'Geospatial Data Science Intern',
    organisation: 'Interspatial Technologies (SIWES)',
    location: 'Ikeja, Lagos, Nigeria',
    highlights: [
      'Built Python-based street-name verification scripts with pandas, NumPy, and ArcGIS Pro, reducing manual GIS quality-assurance work and catching location errors across team datasets.',
      'Improved NDVI deforestation forecasting from 0.073 MAE / 0.092 RMSE to 0.066 MAE / 0.080 RMSE by engineering seasonal features for an LSTM trained on 2018-2026 Sentinel-2 imagery over the Omo Forest Reserve.',
    ],
  },
  {
    period: 'June 2026 - October 2026',
    role: 'AI Research Fellow',
    organisation: 'TRI AI Saturdays, Cohort 10',
    location: 'Google DeepMind AI Research Foundations curriculum, in partnership with University College London',
    highlights: [
      'Selected for a 16+ week applied LLM research fellowship and led the nine-person Team Ethopie through the capstone research project and public showcase.',
      'Directed the fine-tuning strategy for Gemma 2 2B Instruct on a folktale-generation benchmark, placing third among cohort teams.',
    ],
  },
  {
    period: 'February 2025 - Present',
    role: 'Lead',
    organisation: 'PyClub McPherson',
    location: 'McPherson University',
    highlights: [
      'Founded and lead a 100+ member Python and AI community; facilitated 20+ workshops and mentored 30+ beginners in data science and full-stack development.',
    ],
  },
  {
    period: 'October 2025 - Present',
    role: 'Campus Ambassador',
    organisation: 'Data Science Nigeria',
    location: 'McPherson University',
    highlights: [
      'Drive AI and data-science literacy among 500+ students, connecting learners to DSN scholarships, competitions, and internship pathways.',
    ],
  },
]
