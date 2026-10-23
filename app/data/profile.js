// Page content moved here from app/[section]/page.js and app/page.js.
// The wording is unchanged. Edit text here, not in the page files.

export const focusAreas = [
  ['Vision systems', 'Medical imaging, visual features, and deep learning.'],
  ['Language models', 'Fine-tuning, evaluation, and culturally grounded NLP.'],
  ['Applied data', 'Experiments, analysis, and products people can use.'],
]

export const skills = [
  { title: 'Machine learning & AI', copy: 'Building, tuning, and evaluating models for vision, language, and predictive tasks.', items: ['PyTorch', 'scikit-learn', 'XGBoost', 'LightGBM', 'Transformers', 'PEFT'] },
  { title: 'Data & analysis', copy: 'Preparing data, exploring evidence, and communicating it clearly.', items: ['Python', 'SQL', 'Pandas', 'NumPy', 'SciPy', 'Power BI', 'Plotly'] },
  { title: 'Geospatial & research', copy: 'Working with spatial data and experimental workflows.', items: ['ArcGIS Pro', 'Google Earth Engine', 'Sentinel-2', 'LSTM', 'Jupyter', 'Git / GitHub'] },
  { title: 'Product & deployment', copy: 'Turning models into useful, accessible interfaces and services.', items: ['Streamlit', 'FastAPI', 'Flask', 'Django', 'Supabase', 'Azure AI Services'] },
]

export const experience = [
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
    period: 'June 2026 - Present',
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

export const principles = [
  ['Check the data', 'Review source, coverage, labels, missing values, and split design before training.'],
  ['Use meaningful baselines', 'Compare models with simple benchmarks and keep evaluation data separate from training.'],
  ['Show the limits', 'Call out illustrative values, proxy labels, small test sets, and missing real-world validation.'],
]

export const workPoints = [
  ['See the evidence', 'Public repositories make the technical choices and implementation easy to inspect.'],
  ['Measure what matters', 'Metrics and results are included where the work supports a responsible claim.'],
  ['Make it usable', 'Live interfaces translate a model or experiment into something others can explore.'],
]
