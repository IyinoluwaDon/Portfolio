"""Build the editable portfolio project deck in public/decks."""

from pathlib import Path

from pptx import Presentation
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_CONNECTOR, MSO_SHAPE
from pptx.enum.text import MSO_ANCHOR, PP_ALIGN
from pptx.util import Inches, Pt


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "decks"
OUT.mkdir(parents=True, exist_ok=True)

W, H = 13.333, 7.5
INK = "101114"
PAPER = "F1EEE7"
WHITE = "F8F6F0"
VIOLET = "FF765D"
LIME = "78E5D0"
MUTED = "85858B"
RULE = "37383F"
FOREST = "20382E"
SAND = "E8DFC9"
PALE = "23272C"

prs = Presentation()
prs.slide_width = Inches(W)
prs.slide_height = Inches(H)
blank = prs.slide_layouts[6]


def rgb(value):
    return RGBColor.from_string(value)


def rect(slide, x, y, w, h, fill, line=None, kind=MSO_SHAPE.RECTANGLE, width=1):
    shape = slide.shapes.add_shape(kind, Inches(x), Inches(y), Inches(w), Inches(h))
    shape.fill.solid()
    shape.fill.fore_color.rgb = rgb(fill)
    if line:
        shape.line.color.rgb = rgb(line)
        shape.line.width = Pt(width)
    else:
        shape.line.fill.background()
    return shape


def line(slide, x1, y1, x2, y2, color=RULE, width=1):
    shape = slide.shapes.add_connector(MSO_CONNECTOR.STRAIGHT, Inches(x1), Inches(y1), Inches(x2), Inches(y2))
    shape.line.color.rgb = rgb(color)
    shape.line.width = Pt(width)
    return shape


def text(slide, value, x, y, w, h, size=14, color=INK, font="Aptos", bold=False,
         align=PP_ALIGN.LEFT, valign=MSO_ANCHOR.TOP, italic=False, margin=0):
    box = slide.shapes.add_textbox(Inches(x), Inches(y), Inches(w), Inches(h))
    frame = box.text_frame
    frame.clear()
    frame.word_wrap = True
    frame.margin_left = Inches(margin)
    frame.margin_right = Inches(margin)
    frame.margin_top = Inches(margin)
    frame.margin_bottom = Inches(margin)
    frame.vertical_anchor = valign
    for index, paragraph in enumerate(value.split("\n")):
        p = frame.paragraphs[0] if index == 0 else frame.add_paragraph()
        p.alignment = align
        p.space_after = Pt(0)
        p.space_before = Pt(0)
        run = p.add_run()
        run.text = paragraph
        run.font.name = font
        run.font.size = Pt(size)
        run.font.bold = bold
        run.font.italic = italic
        run.font.color.rgb = rgb(color)
    return box


def link_text(slide, value, url, x, y, w, h, size=8.5):
    box = text(slide, value, x, y, w, h, size, VIOLET, bold=True)
    run = box.text_frame.paragraphs[0].runs[0]
    run.hyperlink.address = url
    run.font.underline = True
    run.font.color.rgb = rgb(VIOLET)
    return box


def base(bg=PAPER):
    slide = prs.slides.add_slide(blank)
    slide.background.fill.solid()
    slide.background.fill.fore_color.rgb = rgb(bg)
    return slide


def footer(slide, number, label="Iyinoluwa Don-Taiwo", dark=False):
    line(slide, .62, 7.05, 12.72, 7.05, "474852" if dark else RULE, .65)
    color = "B9BAC1" if dark else MUTED
    text(slide, label, .64, 7.12, 6, .18, 8.5, color)
    text(slide, f"{number} / 10", 11.85, 7.12, .85, .18, 8.5, color, align=PP_ALIGN.RIGHT)


def heading(slide, number, category, title, dark=False):
    main = PAPER if dark else INK
    muted = "B9BAC1" if dark else MUTED
    text(slide, f"{number:02d}   {category.upper()}", .66, .47, 6.8, .23, 9, LIME if dark else VIOLET, bold=True)
    text(slide, title, .66, .95, 11.9, 1.18, 29, main, font="Georgia", bold=True)
    line(slide, .66, 2.35, 12.68, 2.35, "474852" if dark else RULE, .8)
    return main, muted


# Cover
s = base(INK)
rect(s, 8.85, 0, 4.48, 7.5, "252634")
for diameter, color, stroke in [(4.1, "414152", 1), (3.0, "626078", 1), (1.9, LIME, 1.5)]:
    shape = s.shapes.add_shape(MSO_SHAPE.OVAL, Inches(11.05 - diameter / 2), Inches(3.85 - diameter / 2), Inches(diameter), Inches(diameter))
    shape.fill.background()
    shape.line.color.rgb = rgb(color)
    shape.line.width = Pt(stroke)
rect(s, 10.97, 3.65, .12, 1.1, VIOLET)
rect(s, 11.2, 3.11, .12, 1.64, LIME)
rect(s, 11.43, 3.94, .12, .81, "EEEADF")
text(s, "SELECTED WORK", .68, .65, 4, .25, 10, LIME, bold=True)
text(s, "Iyinoluwa\nDon-Taiwo", .68, 1.6, 7.7, 2.35, 36, PAPER, font="Georgia", bold=True)
text(s, "Machine learning engineer\nand data scientist", .72, 4.3, 6.8, .75, 19, "D5D5DA")
line(s, .72, 5.48, 6.85, 5.48, "50515C", 1)
text(s, "Projects with their data, results and limits.", .72, 5.75, 6.8, .42, 14, "D5D5DA")
text(s, "PROJECT DECK   /   2026", .72, 6.62, 3.7, .2, 9, "B9BAC1", bold=True)
text(s, "MACHINE LEARNING     DATA SCIENCE", 9.3, 6.6, 3.45, .2, 8, "D5D5DA", align=PP_ALIGN.RIGHT)


# ACL MRI
s = base(PAPER)
heading(s, 2, "Computer vision", "Classifying an ACL tear from a full MRI volume")
text(s, "A ResNet18 transfer-learning model reads sagittal knee MRI slices. The Streamlit demo accepts NumPy volumes, with optional DICOM and NIfTI readers.", .68, 2.7, 5.75, 1.1, 15, "41424A")
text(s, "0.9719", .68, 4.2, 4.1, .8, 37, VIOLET, font="Aptos Display", bold=True)
text(s, "reported AUC-ROC", .72, 5.02, 3.7, .28, 11, MUTED, bold=True)
text(s, "120-exam validation set   /   Stanford MRNet: 1,370 exams", .72, 5.45, 5.7, .35, 11, INK)
link_text(s, "Repository: github.com/IyinoluwaDon/acl-tear-detection", "https://github.com/IyinoluwaDon/acl-tear-detection", .72, 5.9, 5.8, .22)
rect(s, 7.05, 2.72, 5.55, 3.72, "242630")
text(s, "SAGITTAL MRI SLICES", 7.38, 2.98, 3.7, .22, 8.5, "CFD0D7", bold=True)
for i, x in enumerate([7.55, 8.74, 9.93]):
    rect(s, x, 3.45 + (.12 if i != 1 else 0), .95, 2.35 - (.24 if i != 1 else 0), ["41434D", "575963", "373942"][i], "777983", MSO_SHAPE.RECTANGLE, .8)
    rect(s, x + .18, 3.85 + (.12 if i != 1 else 0), .58, 1.5 - (.16 if i != 1 else 0), ["96948C", "C2BDAF", "85837D"][i], None, MSO_SHAPE.OVAL)
    rect(s, x + .31, 4.25, .27, .72, "4B4A4B", None, MSO_SHAPE.OVAL)
rect(s, 10.45, 4.25, 1.65, .62, VIOLET)
text(s, "MODEL", 10.67, 4.45, 1.2, .18, 8, WHITE, bold=True, align=PP_ALIGN.CENTER)
text(s, "Schematic only. Research prototype, not a diagnostic tool. The reported result has not been independently reproduced here.", .68, 6.57, 11.6, .24, 8.8, MUTED)
footer(s, 2)


# Listing consistency
s = base(WHITE)
heading(s, 3, "Multimodal learning", "Does the product photo match its description?")
text(s, "I used downloaded Rakuten France listings to compare text-only, image-only and fused models. The task pairs real listings with deliberately swapped images to create mismatch examples.", .68, 2.7, 5.7, 1.35, 14, "41424A")
text(s, "20,000", .68, 4.35, 2.7, .68, 30, VIOLET, font="Aptos Display", bold=True)
text(s, "product listings in the subset", .72, 5.05, 3.4, .25, 10, MUTED)
text(s, "25%", 3.67, 4.35, 2.1, .68, 30, INK, font="Aptos Display", bold=True)
text(s, "images swapped for proxy labels", 3.71, 5.05, 2.6, .42, 10, MUTED)
link_text(s, "Repository: github.com/IyinoluwaDon/ecommerce-listing-consistency-detector", "https://github.com/IyinoluwaDon/ecommerce-listing-consistency-detector", .68, 5.87, 5.9, .22, 7.8)
rect(s, 7.02, 2.7, 5.56, 3.78, "F0EEE8")
text(s, "F1 SCORE  /  HIGHER IS BETTER", 7.38, 3.05, 4.8, .22, 9, MUTED, bold=True)
bars = [("Text", .30, "ACAAB5"), ("Image", .25, "868393"), ("Fused", .63, VIOLET)]
for index, (label, value, color) in enumerate(bars):
    y = 3.65 + index * .77
    text(s, label, 7.38, y, 1.05, .28, 11, INK, bold=(label == "Fused"))
    rect(s, 8.65, y + .02, 2.65, .24, "D9D7D0")
    rect(s, 8.65, y + .02, 2.65 * value / .7, .24, color)
    text(s, f"{value:.2f}", 11.54, y - .02, .55, .29, 12, INK, bold=True, align=PP_ALIGN.RIGHT)
text(s, "The mismatch label is a proxy signal, not a general moderation or policy decision.", .68, 6.57, 11.55, .24, 8.8, MUTED)
footer(s, 3)


# Omo forest
s = base(FOREST)
heading(s, 4, "Geospatial data science", "Seasonal inputs lowered forecast error on the holdout", True)
text(s, "The research notebook uses Sentinel-2 NDVI features for Omo Forest Reserve and compares an LSTM with seasonal features against an NDVI-only baseline.", .68, 2.72, 5.35, 1.15, 14, PAPER)
text(s, "MODEL NOTEBOOK", .68, 4.34, 2.3, .25, 9, LIME, bold=True)
text(s, "The hosted dashboard uses illustrative values. The notebook contains the model and reported evaluation.", .68, 4.72, 5.25, .75, 11, "D7D8D8")
link_text(s, "Repository: github.com/IyinoluwaDon/Omo-Forest-Deforestation-Forecasting", "https://github.com/IyinoluwaDon/Omo-Forest-Deforestation-Forecasting", .68, 5.68, 5.7, .22, 7.8)
rect(s, 6.65, 2.76, 5.95, 3.38, "F5F3ED")
text(s, "ERROR COMPARISON  /  LOWER IS BETTER", 6.98, 3.06, 4.9, .24, 9, MUTED, bold=True)
text(s, "MAE", 6.98, 3.57, .75, .28, 11, INK, bold=True)
text(s, "NDVI only", 7.8, 3.57, 1.2, .24, 9.5, MUTED)
rect(s, 9.05, 3.62, 2.28, .2, "DEDDD6")
rect(s, 9.05, 3.62, 2.28 * .073 / .1, .2, "9B9AA2")
text(s, "0.073", 11.48, 3.55, .68, .28, 10, INK, bold=True)
text(s, "Seasonal", 7.8, 4.05, 1.2, .24, 9.5, INK, bold=True)
rect(s, 9.05, 4.10, 2.28, .2, "DEDDD6")
rect(s, 9.05, 4.10, 2.28 * .066 / .1, .2, VIOLET)
text(s, "0.066", 11.48, 4.03, .68, .28, 10, INK, bold=True)
text(s, "RMSE", 6.98, 4.85, .75, .28, 11, INK, bold=True)
text(s, "NDVI only", 7.8, 4.85, 1.2, .24, 9.5, MUTED)
rect(s, 9.05, 4.90, 2.28, .2, "DEDDD6")
rect(s, 9.05, 4.90, 2.28 * .092 / .12, .2, "9B9AA2")
text(s, "0.092", 11.48, 4.83, .68, .28, 10, INK, bold=True)
text(s, "Seasonal", 7.8, 5.32, 1.2, .24, 9.5, INK, bold=True)
rect(s, 9.05, 5.37, 2.28, .2, "DEDDD6")
rect(s, 9.05, 5.37, 2.28 * .080 / .12, .2, VIOLET)
text(s, "0.080", 11.48, 5.30, .68, .28, 10, INK, bold=True)
text(s, "Small holdout with interpolated months. NDVI change alone does not establish deforestation.", .68, 6.57, 11.55, .24, 8.8, "D7D8D8")
footer(s, 4, dark=True)


# Folktale research
s = base(PAPER)
heading(s, 5, "Language models", "Fine-tuning Gemma 2 for an African folktale challenge")
text(s, "I led Team Ethopie, a nine-person group, through the TRI AI Saturdays Cohort 10 capstone. I co-developed the Gemma 2 2B LoRA notebook with one teammate.", .68, 2.7, 5.55, 1.2, 14, "41424A")
text(s, "3rd", .68, 4.25, 2.6, .75, 36, VIOLET, font="Aptos Display", bold=True)
text(s, "place in the cohort capstone", .72, 5.03, 3.6, .28, 11, MUTED)
text(s, "24 synthetic folktales   /   38 prompt-story pairs", .72, 5.53, 5.4, .35, 10.5, INK)
link_text(s, "Repository: github.com/IyinoluwaDon/C10-team-Ethopie", "https://github.com/IyinoluwaDon/C10-team-Ethopie", .72, 5.98, 5.8, .22)
rect(s, 7.03, 2.74, 5.55, 3.68, "EFE6CD")
text(s, "MEAN LEVENSHTEIN DISTANCE", 7.38, 3.1, 4.4, .25, 9, MUTED, bold=True)
text(s, "Baseline", 7.38, 3.8, 1.1, .26, 10, INK)
rect(s, 8.74, 3.82, 2.55, .25, "C7BFAE")
text(s, "211.00", 11.52, 3.77, .7, .3, 11, INK, bold=True)
text(s, "Fine-tuned", 7.38, 4.58, 1.1, .26, 10, INK, bold=True)
rect(s, 8.74, 4.6, 2.55, .25, "D7D0C1")
rect(s, 8.74, 4.6, 2.55 * 171.17 / 211, .25, VIOLET)
text(s, "171.17", 11.52, 4.55, .7, .3, 11, INK, bold=True)
text(s, "Lower is better on this challenge metric.", 7.38, 5.3, 4.7, .28, 10, MUTED)
text(s, "Synthetic benchmark. The score does not assess story quality or cultural fidelity.", .68, 6.57, 11.55, .24, 8.8, MUTED)
footer(s, 5)


# Water mapping
s = base(WHITE)
heading(s, 6, "Geospatial analysis", "Mapping surface water with Sentinel-2 indices")
text(s, "The Python project derives two water indices from Sentinel-2 bands, then fits a decision tree against historical surface-water labels. Spatial blocks separate evaluation areas.", .68, 2.72, 5.45, 1.2, 14, "41424A")
text(s, "Included", .68, 4.35, 1.4, .3, 13, VIOLET, bold=True)
text(s, "Threshold baselines\nDocumented map classes\nOptional Earth Engine export", .68, 4.78, 4.7, 1.2, 12, INK)
link_text(s, "Repository: github.com/IyinoluwaDon/Water-body-detection--Sentinel-2", "https://github.com/IyinoluwaDon/Water-body-detection--Sentinel-2", .68, 6.03, 5.65, .22, 7.8)
rect(s, 6.7, 2.75, 5.88, 3.45, "DCE8E3")
text(s, "FROM SPECTRAL BANDS TO A WATER MAP", 7.03, 3.05, 4.85, .25, 9, MUTED, bold=True)
for x, title, detail in [(7.02, "Sentinel-2", "Green / NIR / SWIR"), (8.92, "NDWI + MNDWI", "water features"), (10.93, "Decision tree", "spatial blocks")]:
    rect(s, x, 3.85, 1.42, 1.05, WHITE, "BBCBC4", width=.8)
    text(s, title, x + .1, 4.05, 1.22, .26, 10, INK, bold=True, align=PP_ALIGN.CENTER)
    text(s, detail, x + .08, 4.47, 1.26, .3, 7.5, MUTED, align=PP_ALIGN.CENTER)
line(s, 8.45, 4.38, 8.85, 4.38, VIOLET, 1.5)
line(s, 10.45, 4.38, 10.85, 4.38, VIOLET, 1.5)
rect(s, 7.05, 5.35, 5.2, .45, "C5D8CF")
text(s, "Lagos-area study   /   generated demo preview", 7.2, 5.47, 4.7, .17, 8.5, INK, align=PP_ALIGN.CENTER)
text(s, "Generated demo data checks the pipeline only. Accuracy on real imagery still needs independent reference checks.", .68, 6.57, 11.55, .24, 8.8, MUTED)
footer(s, 6)


# Full-stack application
s = base(PAPER)
heading(s, 7, "Application development", "Employee records, attendance and payroll in one PHP app")
text(s, "Shebamiles EMS covers employee records, departments, attendance, leave, payroll and performance reviews. Each account has an admin, manager or employee role.", .68, 2.72, 5.5, 1.25, 14, "41424A")
text(s, "Security work", .68, 4.4, 2.1, .3, 13, VIOLET, bold=True)
text(s, "Prepared SQL statements\nPassword hashing and CSRF checks\nFirst-admin setup through a CLI command", .68, 4.82, 5.4, 1.15, 11.5, INK)
link_text(s, "Repository: github.com/IyinoluwaDon/Shebamiles-EMS", "https://github.com/IyinoluwaDon/Shebamiles-EMS", .68, 6.03, 5.4, .22)
rect(s, 7.05, 2.75, 5.55, 3.5, "EBE4ED")
text(s, "ROLE-BASED ACCESS", 7.4, 3.08, 3.6, .22, 9, MUTED, bold=True)
for i, name in enumerate(["Admin", "Manager", "Employee"]):
    x = 7.42 + i * 1.57
    rect(s, x, 3.75, 1.32, .74, WHITE, "C9BFCD", width=.8)
    text(s, name, x + .08, 4.0, 1.16, .2, 10, INK, bold=True, align=PP_ALIGN.CENTER)
line(s, 8.08, 4.5, 8.08, 4.92, "8A6F91", 1)
line(s, 9.65, 4.5, 9.65, 4.92, "8A6F91", 1)
line(s, 11.22, 4.5, 11.22, 4.92, "8A6F91", 1)
line(s, 8.08, 4.92, 11.22, 4.92, "8A6F91", 1)
rect(s, 8.22, 5.18, 2.86, .55, "D8CCD9")
text(s, "EMPLOYEE MANAGEMENT SYSTEM", 8.34, 5.36, 2.62, .17, 8, INK, bold=True, align=PP_ALIGN.CENTER)
text(s, "PHP checks and auth tests pass. Live MySQL integration has not been run in this workspace.", .68, 6.57, 11.55, .24, 8.8, MUTED)
footer(s, 7)


# Bank churn analysis
s = base(INK)
heading(s, 8, "Data analysis", "Checking churn comparisons in an Excel workbook", True)
text(s, "The workbook summarizes 500 customer records with PivotTables and statistical tests. I preserved the input sheet and added a verifier that checks row counts, identifiers, missing values and the reported calculations.", .68, 2.72, 5.55, 1.5, 14, PAPER)
text(s, "F = 0.9898", .68, 4.55, 3.8, .52, 24, LIME, font="Aptos Display", bold=True)
text(s, "Credit-score ANOVA   /   p = 0.3724", .72, 5.13, 4.7, .28, 10, "D5D5DA")
text(s, "Salary t-test   /   p = 0.42", .72, 5.55, 4.3, .28, 10, "D5D5DA")
link_text(s, "Repository: github.com/IyinoluwaDon/bank_churn_analysis", "https://github.com/IyinoluwaDon/bank_churn_analysis", .72, 6.03, 5.8, .22, 8)
rect(s, 7.05, 2.78, 5.55, 3.45, "282936")
text(s, "REPORTED CHURN-RATE RANGE", 7.4, 3.3, 4.75, .24, 9, "D5D5DA", bold=True)
text(s, "52.5–55.2%", 7.4, 4.0, 4.7, .7, 31, LIME, font="Aptos Display", bold=True)
rect(s, 7.4, 5.0, 4.65, .3, "454650")
rect(s, 7.4, 5.0, 4.0, .3, LIME)
text(s, "Sample source and license are undocumented. Descriptive results do not establish causes or general bank-wide churn rates.", .68, 6.57, 11.55, .24, 8.8, "B9BAC1")
footer(s, 8, dark=True)


# HR data analysis
s = base(PAPER)
heading(s, 9, "Data analysis", "Twelve read-only queries over an HR database")
text(s, "A small SQLite analysis validates database integrity, calculates tenure relative to review dates, runs twelve named queries and exports the results as CSV and JSON.", .68, 2.72, 5.5, 1.3, 14, "41424A")
text(s, "1,000", .68, 4.3, 2.4, .62, 30, VIOLET, font="Aptos Display", bold=True)
text(s, "employee records", .72, 4.98, 2.5, .25, 10, MUTED)
text(s, "238", 3.4, 4.3, 1.6, .62, 30, INK, font="Aptos Display", bold=True)
text(s, "Engineering employees", 3.44, 4.98, 2.5, .25, 10, MUTED)
link_text(s, "Repository: github.com/IyinoluwaDon/HR-Data-Analysis-with-SQL", "https://github.com/IyinoluwaDon/HR-Data-Analysis-with-SQL", .68, 5.72, 5.8, .22, 8)
rect(s, 7.05, 2.75, 5.55, 3.48, "1D3033")
text(s, "READ-ONLY QUERY OUTPUT", 7.42, 3.08, 4.6, .23, 9, "A9F0DC", bold=True)
for i, (left, right) in enumerate([("INTEGRITY", "PASS"), ("FOREIGN KEYS", "PASS"), ("NAMED QUERIES", "12"), ("EXPORTS", "CSV + JSON")]):
    y = 3.62 + i * .52
    text(s, left, 7.42, y, 2.2, .22, 9, "D5D5DA")
    text(s, right, 10.0, y, 2.1, .22, 9, PAPER, bold=True, align=PP_ALIGN.RIGHT)
    line(s, 7.42, y + .32, 12.1, y + .32, "43575A", .6)
text(s, "Database source and field definitions are undocumented. Findings describe only the supplied sample.", .68, 6.57, 11.55, .24, 8.8, MUTED)
footer(s, 9)


# Contact
s = base(INK)
text(s, "THANK YOU", .68, .68, 3.2, .25, 10, LIME, bold=True)
text(s, "Get in touch", .68, 1.55, 7.5, 1.05, 36, PAPER, font="Georgia", bold=True)
text(s, "Iyinoluwa Don-Taiwo", .72, 4.05, 5.6, .45, 20, PAPER, font="Georgia", bold=True)
text(s, "Machine learning engineer and data scientist", .72, 4.58, 5.3, .3, 12, "C6C7CE")
line(s, .72, 5.3, 6.8, 5.3, "50515C", .8)
text(s, "iyinoluwadontaiwo@gmail.com", .72, 5.62, 5.4, .3, 13, LIME)
text(s, "github.com/IyinoluwaDon", .72, 6.1, 4.7, .25, 11, "D5D5DA")
rect(s, 8.55, 1.15, 3.72, 4.95, "282936")
for i, color in enumerate([VIOLET, LIME, "EDEADF"]):
    rect(s, 9.12 + i * .86, 3.05 + (i % 2) * .45, .54, .54, color, None, MSO_SHAPE.OVAL)
text(s, "Code, demos and project notes are linked from the portfolio.", 8.95, 4.65, 2.95, .75, 12, PAPER, align=PP_ALIGN.CENTER)
text(s, "iyinoluwa-don-taiwo.vercel.app", 8.95, 5.62, 2.95, .24, 9, "C6C7CE", align=PP_ALIGN.CENTER)
footer(s, 10, "Selected work", dark=True)


prs.core_properties.title = "Iyinoluwa Don-Taiwo | Selected Work"
prs.core_properties.subject = "Machine learning, data science and application projects"
prs.core_properties.author = "Iyinoluwa Don-Taiwo"
prs.core_properties.keywords = "machine learning, data science, geospatial, portfolio"
prs.save(OUT / "iyinoluwa-don-taiwo-projects.pptx")
print(OUT / "iyinoluwa-don-taiwo-projects.pptx")
