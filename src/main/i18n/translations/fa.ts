import { Translations } from "../../../shared/types";

const translationsFa: Translations = {
	// Menu (defined by macOS)
	"about-app": "درباره {appName}",
	"bring-all-to-front": "Bring All to Front",
	close: "بستن",
	copy: "کپی",
	cut: "بریدن",
	edit: "ویرایش",
	file: "فایل",
	help: "کمک",
	"hide-app": "مخفی کردن {appName}",
	"hide-others": "مخفی کردن بقیه",
	minimize: "",
	paste: "پیست",
	preferences: "Preferences",
	"quit-app": "خروج {appName}",
	redo: "Redo",
	"select-all": "انتخاب همه",
	"show-all": "نشان دادن همه",
	speech: "صحبت",
	"start-speaking": "شروع صحبت کردن",
	"stop-speaking": "متوقف کردن صحبت",
	undo: "برگشت",
	view: "دیدن",
	window: "پنجره",
	zoom: "بزرگ کردن",

	// Menu (app-specific)
	export: "خروجی",
	"export-to-format": "خروجی به {format}",
	"go-to-date": "برو به تاریخ",
	"go-to-today": "برو به امروز",
	import: "ورودی",
	"import-from-format": "وارد کردن از {format}",
	license: "مجوز"
	"lock-diary": "Lock Diary",
	"next-day": "روز بعد",
	"next-month": "ماه بعد",
	"previous-day": "روز قبل",
	"previous-month": "ماه قبل",
	"privacy-policy": "سیاست حفظ حریم خصوصی",
	statistics: "آمار",
	website: "وب سایت",

	// Weekdays
	sunday: "یک شنبه",
	monday: "دو شنبه",
	tuesday: "سه شنبه",
	wednesday: "چهار شنبه",
	thursday: "پنج شنبه",
	friday: "جمعه",
	saturday: "شنبه",

	// Theme
	dark: "تیره",
	light: "روشن",
	theme: "تم",

	// Calendar
	today: "امروز",

	// Editor
	"add-a-title": "اضافه کردن یک عنوان",
	bold: "بولد",
	bullets: "Bullets",
	italic: "ایتالیک",
	list: "لیست",
	"write-something": "چیزی بنویسید",

	// Search
	clear: "پاک کردن",
	"no-results": "بدون جواب",
	"no-title": "بدون عنوان",
	search: "پیدا کردن",

	// Preferences
	"allow-future-entries": "Allow entries in the future",
	auto: "اتوماتیک",
	"diary-entries": "Diary entries",
	"enable-spellcheck": "Check spelling",
	"first-day-of-week": "روز اول هفته",
	"hide-titles": "مخفی کردن عنوان ها",
	no: "اشتباه",
	ok: "درست",
	"reset-diary": "Reset diary",
	"reset-diary-confirm": "بله ، من مطمئنم",
	"reset-diary-msg":
		"Are you sure you want to reset your diary? This will delete all of your content. The data cannot be restored.",

	// Password and directory
	"change-directory": "تغییر دیکشنری",
	"change-password": "تغییر رمز عبور",
	"choose-password": "Please choose a password for your diary.",
	"decryption-error": "Error decrypting diary file",
	"diary-file": "Diary file",
	"file-exists": "Another file exists at the destination path",
	"move-error-msg": "An error occurred when moving the file",
	"move-error-title": "Move error",
	"move-file": "Move file",
	"new-password": "رمز عبور جدید",
	password: "رمز عبور",
	"passwords-no-match": "پسورد هم خوانی ندارد",
	"repeat-new-password": "تکرار رمز عبور جدید",
	"repeat-password": "تکرار رمز عبور",
	"select-directory": "انتخاب دیکشنری",
	"set-password": "انتخاب پسورد",
	unlock: "بازکردن قفل",
	"wrong-password": "رمز عبور اشتباه",

	// Statistics
	"total-entries": "total entries",
	"entries-per-week": "entries per week",
	"streak-best": "entries in a row (record streak)",
	"streak-current": "entries in a row (current streak)",
	"total-words": "جمع کلمه",
	"words-per-entry": "words per entry",

	// Import
	"import-error-msg": "An error occurred during the import",
	"import-error-title": "خطای وارد کردن",
	"import-instructions-day-one":
		"Open the Day One app and export your diary under File → Export → {format}. Unzip the created file. Select the resulting {format} file in the next step to import it into {appName}.",
	"import-instructions-jrnl":
		"To export your jrnl diary, run {command}. Select the created JSON file in the next step to import it into {appName}.",
	"import-instructions-mini-diary":
		"You can import your data from a previous {appName} JSON export or from another JSON file that is formatted the same way.",
	"start-import": "شروع وارد کردن",

	// Export
	"export-error-msg": "An error occurred during the export",
	"export-error-title": "خطای خروجی",

	// Other
	loading: "لود",
};

export default translationsFa;
