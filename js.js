
    
    

    // تابع برای آپدیت theme-color
    const updateThemeColor = () => {
      const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#000000';
      document.querySelector('meta[name="theme-color"]').setAttribute('content', primaryColor);
    };

    window.addEventListener('load', updateThemeColor);


    const root = document.documentElement;
    const observer = new MutationObserver(updateThemeColor);


    observer.observe(root, { attributes: true, attributeFilter: ['style'] });
  
  

      // --- THEMES DATA ---
      const themes = [
  {
    name: "پیش‌فرض روشن",
    vars: {
      "--primary": "#4a76a8",
      "--primary-dark": "#2c3e50",
      "--secondary": "#34495e",
      "--accent": "#27ae60",
      "--danger": "#e74c3c",
      "--danger-dark": "#c0392b",
      "--bg": "#f0f2f5",
      "--card-bg": "#ffffff",
      "--text": "#222b3a",
      "--text-light": "#4a76a8",
      "--subtle": "#abb7c4",
    }
  },
  {
    name: "تاریک کلاسیک",
    vars: {
      "--primary": "#20232a",
      "--primary-dark": "#ffffff",
      "--secondary": "#282c34",
      "--accent": "#ff9800",
      "--danger": "#ef5350",
      "--danger-dark": "#b71c1c",
      "--bg": "#16191e",
      "--card-bg": "#23272f",
      "--text": "#000",
      "--text-light": "#ff9800",
      "--subtle": "#4b5668",
    }
  },
  {
    name: "آبی فیروزه‌ای",
    vars: {
      "--primary": "#0093e9",
      "--primary-dark": "#274472",
      "--secondary": "#274472",
      "--accent": "#00d2ff",
      "--danger": "#e67e22",
      "--danger-dark": "#b35409",
      "--bg": "#e3f6ff",
      "--card-bg": "#ffffff",
      "--text": "#203647",
      "--text-light": "#0093e9",
      "--subtle": "#7eaed6",
    }
  },
  {
    name: "سبز چمنی",
    vars: {
      "--primary": "#388e3c",
      "--primary-dark": "#1b5e20",
      "--secondary": "#4caf50",
      "--accent": "#cddc39",
      "--danger": "#e57373",
      "--danger-dark": "#d32f2f",
      "--bg": "#f3fbe6",
      "--card-bg": "#ffffff",
      "--text": "#263238",
      "--text-light": "#388e3c",
      "--subtle": "#a7be8e",
    }
  },
  {
    name: "قرمز مرجانی",
    vars: {
      "--primary": "#e74c3c",
      "--primary-dark": "#c0392b",
      "--secondary": "#e57373",
      "--accent": "#ffb347",
      "--danger": "#e74c3c",
      "--danger-dark": "#c0392b",
      "--bg": "#ffeae6",
      "--card-bg": "#ffffff",
      "--text": "#2d2222",
      "--text-light": "#e74c3c",
      "--subtle": "#ffa07a",
    }
  },
  {
    name: "بنفش گرانیتی",
    vars: {
      "--primary": "#6d4aff",
      "--primary-dark": "#3a2e80",
      "--secondary": "#8f71ff",
      "--accent": "#7c43bd",
      "--danger": "#f44336",
      "--danger-dark": "#b71c1c",
      "--bg": "#ece6f7",
      "--card-bg": "#ffffff",
      "--text": "#26213a",
      "--text-light": "#6d4aff",
      "--subtle": "#bbb2e2",
    }
  },
  {
    name: "صورتی ملایم",
    vars: {
      "--primary": "#ff6f91",
      "--primary-dark": "#ce416a",
      "--secondary": "#ffb6b9",
      "--accent": "#ffc2d1",
      "--danger": "#e17055",
      "--danger-dark": "#b24d4d",
      "--bg": "#fff2f7",
      "--card-bg": "#ffffff",
      "--text": "#281425",
      "--text-light": "#ff6f91",
      "--subtle": "#fbc2eb",
    }
  },
  {
    name: "خاکستری مدرن",
    vars: {
      "--primary": "#3c3f41",
      "--primary-dark": "#232526",
      "--secondary": "#444648",
      "--accent": "#81ecec",
      "--danger": "#e17055",
      "--danger-dark": "#c44536",
      "--bg": "#e4e6eb",
      "--card-bg": "#f7f7fa",
      "--text": "#18191a",
      "--text-light": "#3c3f41",
      "--subtle": "#b0b3b8",
    }
  },
  {
    name: "سبز آبی (Teal)",
    vars: {
      "--primary": "#009688",
      "--primary-dark": "#00695c",
      "--secondary": "#4dd0e1",
      "--accent": "#00bfae",
      "--danger": "#ff7043",
      "--danger-dark": "#bf360c",
      "--bg": "#e0f2f1",
      "--card-bg": "#ffffff",
      "--text": "#263238",
      "--text-light": "#009688",
      "--subtle": "#9bd6d3",
    }
  },
  {
    name: "پورنهاب (Pornhub)",
    vars: {
      "--primary": "#ff9000",
      "--primary-dark": "#ffff",
      "--secondary": "#181818",
      "--accent": "#ff9000",
      "--danger": "#ff173a",
      "--danger-dark": "#b50824",
      "--bg": "#181818",
      "--card-bg": "#222222",
      "--text": "#000",
      "--text-light": "#ff9000",
      "--subtle": "#808080",
    }
  },
  {
    name: "نئونی آبی",
    vars: {
      "--primary": "#2979ff",
      "--primary-dark": "#fff",
      "--secondary": "#212121",
      "--accent": "#00eaff",
      "--danger": "#e040fb",
      "--danger-dark": "#7c43bd",
      "--bg": "#050611",
      "--card-bg": "#15162a",
      "--text": "#000",
      "--text-light": "#00eaff",
      "--subtle": "#7cacec",
    }
  },
  {
    name: "تاریک ماتریال",
    vars: {
      "--primary": "#2196f3",
      "--primary-dark": "#fff",
      "--secondary": "#263238",
      "--accent": "#00bcd4",
      "--danger": "#e57373",
      "--danger-dark": "#b71c1c",
      "--bg": "#121212",
      "--card-bg": "#23272f",
      "--text": "#000",
      "--text-light": "#2196f3",
      "--subtle": "#607d8b",
    }
  },
  
  // ... سایر تم‌ها با تنظیم مشابه برای حفظ کنتراست کافی ...
];
      // --- END THEMES DATA ---

      // --- POPULATE THEME SELECT ---
      function populateThemeSelect() {
        const select = document.getElementById("theme-select");
        themes.forEach((theme, i) => {
          const opt = document.createElement("option");
          opt.value = i;
          opt.textContent = theme.name;
          select.appendChild(opt);
        });
      }

      // --- APPLY THEME ---
      function applyTheme(themeIndex) {
        const theme = themes[themeIndex] || themes[0];
        for (const key in theme.vars) {
          document.documentElement.style.setProperty(key, theme.vars[key]);
        }
        localStorage.setItem("themeIndex", themeIndex);
        document.getElementById("theme-select").value = themeIndex;
      }

      document.addEventListener("DOMContentLoaded", function() {
        populateThemeSelect();
        const storedTheme = localStorage.getItem("themeIndex");
        applyTheme(storedTheme ? +storedTheme : 0);
        document.getElementById("theme-select").addEventListener("change", function() {
          applyTheme(this.value);
        });
      });
    
  
     
      window.onload = function () {
        let todayJY, todayJM, todayJD;
        let calendarView = {};

        const persianMonths = [
          "",
          "فروردین",
          "اردیبهشت",
          "خرداد",
          "تیر",
          "مرداد",
          "شهریور",
          "مهر",
          "آبان",
          "آذر",
          "دی",
          "بهمن",
          "اسفند",
        ];
        const persianWeekdays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

        function toJalali(gy, gm, gd) {
          let g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
          let jy = gy > 1600 ? 979 : 0;
          gy -= gy > 1600 ? 1600 : 621;
          let gy2 = gm > 2 ? gy + 1 : gy;
          let days =
            365 * gy +
            Math.floor((gy2 + 3) / 4) -
            Math.floor((gy2 + 99) / 100) +
            Math.floor((gy2 + 399) / 400) -
            80 +
            gd +
            g_d_m[gm - 1];
          jy += 33 * Math.floor(days / 12053);
          days %= 12053;
          jy += 4 * Math.floor(days / 1461);
          days %= 1461;
          if (days > 365) {
            jy += Math.floor((days - 1) / 365);
            days = (days - 1) % 365;
          }
          let jm =
            days < 186
              ? 1 + Math.floor(days / 31)
              : 7 + Math.floor((days - 186) / 30);
          let jd = 1 + (days < 186 ? days % 31 : (days - 186) % 30);
          return { jy, jm, jd };
        }
        function toGregorian(jy, jm, jd) {
          jy = parseInt(jy);
          jm = parseInt(jm);
          jd = parseInt(jd);
          let gy = jy > 979 ? 1600 : 621;
          jy -= jy > 979 ? 979 : 0;
          let days =
            365 * jy +
            Math.floor(jy / 33) * 8 +
            Math.floor(((jy % 33) + 3) / 4);
          for (let i = 1; i < jm; ++i) days += i <= 6 ? 31 : 30;
          days += jd - 1;
          let gy4 = gy + 400 * Math.floor(days / 146097);
          days %= 146097;
          let leap = true;
          if (days > 36524) {
            gy4 += 100 * Math.floor(--days / 36524);
            days %= 36524;
            if (days >= 365) days++;
            else leap = false;
          }
          gy4 += 4 * Math.floor(days / 1461);
          days %= 1461;
          if (days > 365) {
            gy4 += Math.floor((days - 1) / 365);
            days = (days - 1) % 365;
            leap = false;
          }
          let gd = days + 1;
          let sal_a = [
            0,
            31,
            leap ? 29 : 28,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31,
          ];
          let gm;
          for (gm = 0; gm < 13; gm++) {
            let v = sal_a[gm];
            if (gd <= v) break;
            gd -= v;
          }
          return { gy: gy4, gm: gm, gd: gd };
        }
        function jalaliDayOfYear(jy, jm, jd) {
          let sum = 0;
          for (let m = 1; m < jm; m++) sum += m <= 6 ? 31 : m <= 11 ? 30 : 29;
          return sum + jd;
        }
        function getLastDayOfMonth(jm, jy) {
          if (jm <= 6) return 31;
          if (jm <= 11) return 30;
          let kabise = [1, 5, 9, 13, 17, 22, 26, 30];
          return kabise.includes(jy % 33) ? 30 : 29;
        }

        function updateDate() {
          let now = new Date();
          let { jy, jm, jd } = toJalali(
            now.getFullYear(),
            now.getMonth() + 1,
            now.getDate()
          );
          todayJY = jy;
          todayJM = jm;
          todayJD = jd;
          document.getElementById(
            "date"
          ).innerHTML = `<svg width="20" height="20" style="vertical-align:middle;opacity:.7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="18" rx="4"/><path d="M8 2v4m8-4v4"/><path d="M2 10h20"/></svg> ${jy}/${jm}/${jd}`;
          if (!calendarView.year || !calendarView.month) {
            calendarView = { year: jy, month: jm, selectedDay: jd };
          }
          renderCalendar();
          renderAll();
        }
        setInterval(updateDate, 60 * 1000);

        // --- اضافه شده: باز کردن مودال حرفه‌ای ماه/سال
        function showMonthTitleModal() {
          // فعال کردن حالت open برای ماه-سال
          const titleEl = document.querySelector(
            ".calendar-header .month-title"
          );
          if (titleEl) titleEl.classList.add("open");
          document.getElementById("monthTitleModalYear").value =
            calendarView.year || todayJY;
          document.getElementById("monthTitleModalMonth").value =
            calendarView.month || todayJM;
          document.getElementById("monthTitleModalError").innerText = "";
          document.getElementById("monthTitleModal").style.display = "flex";
          document.getElementById("monthTitleModalYear").focus();
        }
        // بستن مودال حرفه‌ای
        function closeMonthTitleModal() {
          // غیرفعال کردن حالت open برای ماه-سال
          const titleEl = document.querySelector(
            ".calendar-header .month-title"
          );
          if (titleEl) titleEl.classList.remove("open");
          document.getElementById("monthTitleModal").style.display = "none";
        }

        // --- اضافه شده: منطق و رویدادهای مودال ماه/سال (حرفه‌ای)
        document.getElementById("monthTitleModalCancelBtn").onclick =
          closeMonthTitleModal;
        document
          .getElementById("monthTitleModal")
          .addEventListener("click", function (e) {
            if (e.target === document.getElementById("monthTitleModal"))
              closeMonthTitleModal();
          });
        document.getElementById("monthTitleModalShowBtn").onclick =
          function () {
            let y = parseInt(
              document.getElementById("monthTitleModalYear").value
            );
            let m = parseInt(
              document.getElementById("monthTitleModalMonth").value
            );
            let error = "";
            if (isNaN(y) || y < 1 || y > 3000) error = "سال معتبر نیست";
            else if (isNaN(m) || m < 1 || m > 12) error = "ماه معتبر نیست";
            if (error) {
              document.getElementById("monthTitleModalError").innerText = error;
              return;
            }
            calendarView = { year: y, month: m, selectedDay: 1 };
            renderCalendar();
            closeMonthTitleModal();
          };

        // ویرایش شده: باز و بسته شدن مودال و آیکون dropdown/up
        document.addEventListener("click", function (e) {
          if (
            e.target.classList.contains("month-title") ||
            (e.target.closest && e.target.closest(".month-title"))
          )
            showMonthTitleModal();
        });

        // renderCalendar با SVG arrow
        function renderCalendar() {
          let jy = calendarView.year,
            jm = calendarView.month,
            sd = calendarView.selectedDay || 1;
          let calEl = document.getElementById("calendar-card");
          calEl.innerHTML = "";

          let header = document.createElement("div");
          header.className = "calendar-header";
          header.innerHTML = `
    <button id="btn-next-month" title="ماه بعد">&#8592;</button>
    <div class="month-title" style="cursor:pointer" title="کلیک کنید برای انتخاب سریع ماه و سال">
      ${persianMonths[jm]} ${jy}
      <span class="month-title-arrow" aria-hidden="true">
        <svg width="20" height="20" style="display:block" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="5,8 10,13 15,8" stroke="#4a76a8" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </div>
    <button id="btn-prev-month" title="ماه قبل">&#8594;</button>
  `;
          calEl.append(header);

          let weekRow = document.createElement("div");
          weekRow.className = "calendar-weekdays";
          weekRow.innerHTML = persianWeekdays
            .map((d) => `<div>${d}</div>`)
            .join("");
          calEl.append(weekRow);

          let g = toGregorian(jy, jm, 1);
          let firstDay = new Date(g.gy, g.gm - 1, g.gd).getDay();
          let offset = (firstDay + 1) % 7;
          let daysPrevMonth = 0,
            prevMonth = jm - 1,
            prevYear = jy;
          if (prevMonth === 0) {
            prevMonth = 12;
            prevYear--;
          }
          daysPrevMonth = getLastDayOfMonth(prevMonth, prevYear);

          let daysInMonth = getLastDayOfMonth(jm, jy);

          let grid = document.createElement("div");
          grid.id = "jalali-calendar";
          let daysShown = 0;
          for (let i = 0; i < offset; i++) {
            let d = daysPrevMonth - offset + i + 1;
            let div = document.createElement("div");
            div.className = "day other-month";
            div.textContent = d;
            div.title = `${persianMonths[prevMonth]} ${prevYear}`;
            div.onclick = () => {
              calendarView = {
                year: prevYear,
                month: prevMonth,
                selectedDay: d,
              };
              renderCalendar();
            };
            grid.append(div);
            daysShown++;
          }
          for (let d = 1; d <= daysInMonth; d++) {
            let div = document.createElement("div");
            div.className = "day";
            div.textContent = d;
            if (jy === todayJY && jm === todayJM && d === todayJD)
              div.classList.add("today");
            if (
              d === sd &&
              jy === calendarView.year &&
              jm === calendarView.month
            )
              div.classList.add("selected");
            div.onclick = () => {
              calendarView.selectedDay = d;
              renderCalendar();
            };
            grid.append(div);
            daysShown++;
          }
          let nextMonth = jm + 1,
            nextYear = jy;
          if (nextMonth === 13) {
            nextMonth = 1;
            nextYear++;
          }
          let remain = (7 - (daysShown % 7)) % 7;
          for (let i = 1; i <= remain; i++) {
            let div = document.createElement("div");
            div.className = "day other-month";
            div.textContent = i;
            div.title = `${persianMonths[nextMonth]} ${nextYear}`;
            div.onclick = () => {
              calendarView = {
                year: nextYear,
                month: nextMonth,
                selectedDay: i,
              };
              renderCalendar();
            };
            grid.append(div);
          }
          calEl.append(grid);

          document.getElementById("btn-prev-month").onclick = () => {
            let m = calendarView.month - 1,
              y = calendarView.year;
            if (m === 0) {
              m = 12;
              y--;
            }
            calendarView.month = m;
            calendarView.year = y;
            let maxDay = getLastDayOfMonth(m, y);
            if (calendarView.selectedDay > maxDay)
              calendarView.selectedDay = maxDay;
            renderCalendar();
          };
          document.getElementById("btn-next-month").onclick = () => {
            let m = calendarView.month + 1,
              y = calendarView.year;
            if (m === 13) {
              m = 1;
              y++;
            }
            calendarView.month = m;
            calendarView.year = y;
            let maxDay = getLastDayOfMonth(m, y);
            if (calendarView.selectedDay > maxDay)
              calendarView.selectedDay = maxDay;
            renderCalendar();
          };
        }

        // مودال انتخاب دستی تاریخ (همان قبلی)
        function showCustomDateModal() {
          document.getElementById("customDateYear").value =
            calendarView.year || todayJY;
          document.getElementById("customDateMonth").value =
            calendarView.month || todayJM;
          document.getElementById("customDateDay").value =
            calendarView.selectedDay || todayJD;
          document.getElementById("customDateModalError").innerText = "";
          document.getElementById("customDateModal").style.display = "flex";
          document.getElementById("customDateYear").focus();
        }
        document.body.addEventListener("click", function (e) {
          if (e.target === document.getElementById("customDateModal"))
            document.getElementById("customDateModal").style.display = "none";
        });
        document.getElementById("customDateCancelBtn").onclick = function () {
          document.getElementById("customDateModal").style.display = "none";
        };
        document.getElementById("customDateSetBtn").onclick = function () {
          let y = parseInt(document.getElementById("customDateYear").value);
          let m = parseInt(document.getElementById("customDateMonth").value);
          let d = parseInt(document.getElementById("customDateDay").value);
          let error = "";
          if (isNaN(y) || y < 1 || y > 3000) error = "سال معتبر نیست";
          else if (isNaN(m) || m < 1 || m > 12) error = "ماه معتبر نیست";
          else {
            let maxDay = getLastDayOfMonth(m, y);
            if (isNaN(d) || d < 1 || d > maxDay)
              error = `روز باید بین ۱ تا ${maxDay} باشد`;
          }
          if (error) {
            document.getElementById("customDateModalError").innerText = error;
            return;
          }
          calendarView = { year: y, month: m, selectedDay: d };
          renderCalendar();
          document.getElementById("customDateModal").style.display = "none";
        };

        const ls = localStorage;
        const getData = (key) => JSON.parse(ls.getItem(key) || "[]");
        const saveData = (key, data) => ls.setItem(key, JSON.stringify(data));

        function showInputModal(msg, onSubmit, defaultVal = 0) {
          document.getElementById("modalBox").innerHTML = `
    <p>${msg}</p>
    <input type="number" id="modalInput" style="width:130px; margin:1rem auto; display:block;" min="0" value="${defaultVal}" />
    <button id="modalSubmit" class="btn-green">ثبت</button>
    <button id="modalClose">انصراف</button>
  `;
          document.getElementById("modalOverlay").style.display = "flex";
          document.getElementById("modalSubmit").onclick = () => {
            const val = +document.getElementById("modalInput").value;
            if (isNaN(val) || val < 0) return alert("عدد معتبر وارد کنید");
            document.getElementById("modalOverlay").style.display = "none";
            onSubmit(val);
          };
          document.getElementById("modalClose").onclick = () => {
            document.getElementById("modalOverlay").style.display = "none";
          };
        }
        function showConfirmModal(msg, onConfirm) {
          document.getElementById("modalBox").innerHTML = `
    <p>${msg}</p>
    <button id="modalConfirm" class="modal-confirm-btn">بله</button>
    <button id="modalCancel" class="modal-cancel-btn">خیر</button>
  `;
          document.getElementById("modalOverlay").style.display = "flex";
          document.getElementById("modalConfirm").onclick = () => {
            document.getElementById("modalOverlay").style.display = "none";
            onConfirm();
          };
          document.getElementById("modalCancel").onclick = () => {
            document.getElementById("modalOverlay").style.display = "none";
          };
        }

        function showEditModal(item, onSave, onDelete) {
          let typeVal = "boolean";
          if (item.total !== undefined && (item.total > 0 || item.done > 0)) {
            typeVal = item.frequency ? "quantitative" : "timed";
          }
          document.getElementById("modalBox").innerHTML = `
    <button id="modalDelete" class="delete-icon-btn" title="حذف"><svg width="18" height="18" style="vertical-align:middle" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 3L8 4.5H4v2h16v-2h-4L14.5 3h-5zm7 5v12.5A2.5 2.5 0 0 1 14 23h-4a2.5 2.5 0 0 1-2.5-2.5V8h13zm-10 0V20.5A4.5 4.5 0 0 0 10 25h4a4.5 4.5 0 0 0 4.5-4.5V8H6.5z"/></svg></button>
    <p>ویرایش مورد</p>
    <label>عنوان:</label>
    <input type="text" id="modalEditTitle" value="${item.text || ""}" />
    <label>نوع:</label>
    <select id="modalEditType">
      <option value="boolean" ${
        typeVal == "boolean" ? "selected" : ""
      }>تیک‌زدنی</option>
      <option value="quantitative" ${
        typeVal == "quantitative" ? "selected" : ""
      }>کمی</option>
      <option value="timed" ${
        typeVal == "timed" ? "selected" : ""
      }>زمانی</option>
    </select>
    <div id="modalEditTotalContainer" style="margin-top:6px;${
      typeVal == "boolean" ? "display:none" : ""
    }">
      <label>مقدار کل:</label>
      <input type="number" id="modalEditTotal" value="${
        item.total || ""
      }" min="1" />
    </div>
    <div id="modalEditDoneContainer" style="margin-top:6px;${
      typeVal == "boolean" ? "display:none" : ""
    }">
      <label>مقدار ثبت‌شده:</label>
      <input type="number" id="modalEditDone" value="${
        item.done || ""
      }" min="0" />
    </div>
    <button id="modalEditSave" class="btn-green">ذخیره ویرایش</button>
    <button id="modalClose">انصراف</button>
  `;
          document.getElementById("modalOverlay").style.display = "flex";

          document.getElementById("modalEditType").onchange = (e) => {
            const v = e.target.value;
            document.getElementById("modalEditTotalContainer").style.display =
              v == "boolean" ? "none" : "block";
            document.getElementById("modalEditDoneContainer").style.display =
              v == "boolean" ? "none" : "block";
          };

          document.getElementById("modalEditSave").onclick = () => {
            const newText = document
              .getElementById("modalEditTitle")
              .value.trim();
            const newType = document.getElementById("modalEditType").value;
            let newTotal = parseInt(
              document.getElementById("modalEditTotal")?.value
            );
            let newDone = parseInt(
              document.getElementById("modalEditDone")?.value
            );
            if (!newText) return alert("عنوان را وارد کنید");
            let updated = { ...item, text: newText };
            if (newType === "quantitative" || newType === "timed") {
              if (isNaN(newTotal) || newTotal < 1)
                return alert("مقدار کل معتبر نیست");
              updated.total = newTotal;
              updated.done = isNaN(newDone) ? 0 : newDone;
            } else {
              delete updated.total;
              delete updated.done;
            }
            document.getElementById("modalOverlay").style.display = "none";
            onSave(updated, newType);
          };
          document.getElementById("modalDelete").onclick = () => {
            showConfirmModal("آیا از حذف این مورد مطمئن هستید؟", function () {
              document.getElementById("modalOverlay").style.display = "none";
              onDelete();
            });
          };
          document.getElementById("modalClose").onclick = () => {
            document.getElementById("modalOverlay").style.display = "none";
          };
        }

        function showPopup(msg) {
          document.getElementById("modalBox").innerHTML = `
    <p id="modalMessage">${msg}</p>
    <button id="modalClose" class="btn-green" style="margin-top:1.5rem;">باشه</button>
  `;
          document.getElementById("modalOverlay").style.display = "flex";
          document.getElementById("modalClose").onclick = () => {
            document.getElementById("modalOverlay").style.display = "none";
          };
        }

        function canGoalBeChecked(
          goalItem,
          callbackIfAllowed,
          callbackIfNotAllowed
        ) {
          if (!goalItem.frequency) return callbackIfAllowed();
          let dayOfWeek = new Date().getDay();
          let frequency = goalItem.frequency;
          if (frequency === "daily") return callbackIfAllowed();
          if (frequency === "weekly") {
            if (dayOfWeek === 5) return callbackIfAllowed();
            let daysToFriday = (5 - dayOfWeek + 7) % 7;
            if (daysToFriday === 0) daysToFriday = 7;
            return callbackIfNotAllowed(
              `تنها در روز جمعه می‌توانید هدف هفتگی را ثبت کنید. ${daysToFriday} روز تا جمعه باقی مانده است.`
            );
          }
          if (frequency === "monthly") {
            let lastDayOfMonth = getLastDayOfMonth(todayJM, todayJY);
            if (todayJD === lastDayOfMonth) return callbackIfAllowed();
            return callbackIfNotAllowed(
              `تنها در آخر ماه می‌توانید هدف ماهانه را ثبت کنید. ${
                lastDayOfMonth - todayJD
              } روز تا پایان ماه باقی مانده است.`
            );
          }
          if (frequency === "yearly") {
            let dayOfYear = jalaliDayOfYear(todayJY, todayJM, todayJD);
            if (dayOfYear === 365) return callbackIfAllowed();
            return callbackIfNotAllowed(
              `تنها در روز ۳۶۵م سال می‌توانید هدف سالانه را ثبت کنید. ${
                365 - dayOfYear
              } روز تا پایان سال مانده است.`
            );
          }
          callbackIfAllowed();
        }

        function renderList(key, elm, btn) {
          let list = getData(key),
            ul = document.getElementById(elm),
            bt = document.getElementById(btn);
          ul.innerHTML = "";
          if (!list.length) {
            bt.style.display = "block";
          } else {
            bt.style.display = "none";
            list.forEach((it, i) => {
              let row = document.createElement("div");
              row.className = "item-row";
              let info = document.createElement("div");
              info.className = "item-info";
              if (it.total !== undefined) {
                info.innerText = `${it.text} (${it.done || 0}/${it.total})`;
              } else {
                info.innerText = it.text;
              }
              row.append(info);

              let act = document.createElement("div");
              act.className = "item-actions";
              if (it.total !== undefined) {
                if (!it.done || it.done == 0) {
                  let btnSet = document.createElement("button");
                  btnSet.innerText = "ثبت";
                  btnSet.onclick = () => {
                    if (key === "goals" && it.frequency) {
                      canGoalBeChecked(
                        it,
                        () => {
                          showInputModal(
                            "مقدار انجام‌شده را وارد کنید",
                            (val) => {
                              it.done = val;
                              saveData(key, list);
                              renderAll();
                            }
                          );
                        },
                        (msg) => showPopup(msg)
                      );
                    } else {
                      showInputModal("مقدار انجام‌شده را وارد کنید", (val) => {
                        it.done = val;
                        saveData(key, list);
                        renderAll();
                      });
                    }
                  };
                  act.append(btnSet);
                }
                let btnE = document.createElement("button");
                btnE.innerText = "ویرایش";
                btnE.onclick = () => {
                  showEditModal(
                    it,
                    (updated, newType) => {
                      if (newType === "boolean") {
                        delete updated.total;
                        delete updated.done;
                      } else {
                        updated.total = updated.total || 1;
                        updated.done = updated.done || 0;
                      }
                      list[i] = updated;
                      saveData(key, list);
                      renderAll();
                    },
                    () => {
                      list.splice(i, 1);
                      saveData(key, list);
                      renderAll();
                    }
                  );
                };
                act.append(btnE);
              } else {
                let cb = document.createElement("input");
                cb.type = "checkbox";
                cb.checked = it.checked;
                cb.onchange = () => {
                  if (key === "goals" && it.frequency) {
                    canGoalBeChecked(
                      it,
                      () => {
                        it.checked = cb.checked;
                        saveData(key, list);
                        renderAll();
                      },
                      (msg) => {
                        cb.checked = !cb.checked;
                        showPopup(msg);
                      }
                    );
                  } else {
                    it.checked = cb.checked;
                    saveData(key, list);
                    renderAll();
                  }
                };
                act.append(cb);

                let btnE = document.createElement("button");
                btnE.innerText = "ویرایش";
                btnE.onclick = () => {
                  showEditModal(
                    it,
                    (updated, newType) => {
                      if (newType === "boolean") {
                        delete updated.total;
                        delete updated.done;
                      } else {
                        updated.total = updated.total || 1;
                        updated.done = updated.done || 0;
                      }
                      list[i] = updated;
                      saveData(key, list);
                      renderAll();
                    },
                    () => {
                      list.splice(i, 1);
                      saveData(key, list);
                      renderAll();
                    }
                  );
                };
                act.append(btnE);
              }
              row.append(act);
              ul.append(row);
            });
          }
        }

        function renderAll() {
          renderList("tasks", "tasks-list", "btn-add-task-if-empty");
          renderList("limits", "limits-list", "btn-add-limit-if-empty");
          renderList("goals", "goals-list", "btn-add-goal-if-empty");
        }

        const categorySelect = document.getElementById("new-category");
        const goalOptions = document.getElementById("goal-options");
        const typeContainer = document.getElementById("type-container");
        const typeSelect = document.getElementById("new-type");
        const valueContainer = document.getElementById("value-container");

        categorySelect.addEventListener("change", (e) => {
          const val = e.target.value;
          if (val === "goal") {
            goalOptions.style.display = "block";
          } else {
            goalOptions.style.display = "none";
          }
          typeSelect.value = "boolean";
          valueContainer.style.display = "none";
        });

        typeSelect.addEventListener("change", (e) => {
          const t = e.target.value;
          if (t === "quantitative" || t === "timed") {
            valueContainer.style.display = "block";
          } else {
            valueContainer.style.display = "none";
          }
        });

        // --- HAMBURGER ANIMATION TOGGLE ---
        document.getElementById("btn-menu").onclick = function () {
          const nav = document.getElementById("nav");
          const hamburger = document.getElementById("btn-menu");
          nav.classList.toggle("show");
          hamburger.classList.toggle("active");
        };
        // nav close on navigation (reset hamburger)
        document.querySelectorAll("nav li").forEach((li) => {
          li.onclick = () => {
            document
              .querySelectorAll("nav li")
              .forEach((x) => x.classList.remove("active"));
            li.classList.add("active");
            document
              .querySelectorAll("section")
              .forEach((s) => s.classList.remove("active"));
            document.getElementById(li.dataset.section).classList.add("active");
            document.getElementById("nav").classList.remove("show");
            document.getElementById("btn-menu").classList.remove("active");
            if (li.dataset.section === "new") {
              document.getElementById("btn-save-new").innerText = "ذخیره";
              document.getElementById("new-title").value = "";
              document.getElementById("new-total").value = "";
              valueContainer.style.display = "none";
              goalOptions.style.display = "none";
            }
          };
        });

        [
          "btn-add-task-if-empty",
          "btn-add-limit-if-empty",
          "btn-add-goal-if-empty",
        ].forEach((id) => {
          document.getElementById(id).onclick = () =>
            document.querySelector('nav li[data-section="new"]').click();
        });

        document.getElementById("btn-save-new").onclick = () => {
          const category = categorySelect.value;
          const type = typeSelect.value;
          const title = document.getElementById("new-title").value.trim();
          if (!title) return showPopup("لطفا عنوان را وارد کنید");
          let key =
            category === "task"
              ? "tasks"
              : category === "limit"
              ? "limits"
              : "goals";
          const list = getData(key);

          if (window.editingItem && key === window.editingKey) {
            const item = list[window.editingIndex];
            item.text = title;
            if (type === "quantitative" || type === "timed") {
              item.total = +document.getElementById("new-total").value;
              item.done = item.done || 0;
            } else {
              delete item.total;
              delete item.done;
            }
            if (category === "goal") {
              item.frequency = document.getElementById("goal-frequency").value;
            } else {
              delete item.frequency;
            }
            saveData(key, list);
            window.editingItem = null;
            window.editingKey = null;
            window.editingIndex = null;
            document.getElementById("btn-save-new").innerText = "ذخیره";
            showPopup("ویرایش با موفقیت انجام شد");
          } else {
            const item = { text: title, checked: false };
            if (type === "quantitative" || type === "timed") {
              item.total = +document.getElementById("new-total").value;
              item.done = 0;
            }
            if (category === "goal") {
              item.frequency = document.getElementById("goal-frequency").value;
            }
            list.push(item);
            saveData(key, list);
            showPopup("با موفقیت ذخیره شد");
          }
          document.getElementById("new-title").value = "";
          document.getElementById("new-total").value = "";
          valueContainer.style.display = "none";
          goalOptions.style.display = "none";
          renderAll();
        };

        document.getElementById("btn-save-report").onclick = () => {
          const tp = document.getElementById("report-type").value;
          const txt = document.getElementById("report-text").value.trim();
          if (!txt) return showPopup("گزارش خالی است");
          let dayOfWeek = new Date().getDay();
          let dayOfYear = jalaliDayOfYear(todayJY, todayJM, todayJD);
          if (tp === "weekly" && dayOfWeek !== 5)
            return showPopup(
              ((5 - dayOfWeek + 7) % 7 || 7) + " روز تا جمعه مانده"
            );
          if (tp === "monthly") {
            const last = getLastDayOfMonth(todayJM, todayJY);
            if (todayJD !== last)
              return showPopup(last - todayJD + " روز تا پایان ماه مانده");
          }
          if (tp === "yearly" && dayOfYear !== 365)
            return showPopup(365 - dayOfYear + " روز تا پایان سال مانده");
          const reps = getData("reports");
          reps.push({
            type: tp,
            date: `${todayJY}/${todayJM}/${todayJD}`,
            text: txt,
          });
          saveData("reports", reps);
          document.getElementById("report-text").value = "";
          showPopup("گزارش ذخیره شد");
        };

        updateDate();
      };
    