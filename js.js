 // --- THEMES AND WORD EDITOR LOGIC ---

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
        const theme = themes[themeIndex] || themes[0]; // Fallback to default theme
        for (const key in theme.vars) {
          document.documentElement.style.setProperty(key, theme.vars[key]);
        }
        localStorage.setItem("themeIndex", themeIndex);
        document.getElementById("theme-select").value = themeIndex;
      }

      document.addEventListener("DOMContentLoaded", function() {
        populateThemeSelect();
        const storedTheme = localStorage.getItem("themeIndex");
        applyTheme(storedTheme ? +storedTheme : 0); // Apply stored or default theme
        document.getElementById("theme-select").addEventListener("change", function() {
          applyTheme(this.value);
        });
      });

      // --- WORD (ورد) SECTION LOGIC ---
      (function() {
        const wordEditor = document.getElementById('word-editor');
        const wordSaveBtn = document.getElementById('word-save');
        const wordClearBtn = document.getElementById('word-clear');
        const wordDownloadBtn = document.getElementById('word-download');
        const wordPrintBtn = document.getElementById('word-print');
        const wordFontSize = document.getElementById('word-fontsize');
        const wordFontFamily = document.getElementById('word-font');
        const wordColor = document.getElementById('word-color');
        const wordBgColor = document.getElementById('word-bgcolor');
        const wordInsertImage = document.getElementById('word-insert-image');
        const wordImageInput = document.getElementById('word-image-input');
        const toolbar = document.getElementById('word-toolbar');

        // New Image Resize Modal Elements
        const imageResizeModal = document.getElementById('imageResizeModal');

        const imageResizeSlider = document.getElementById('imageResizeSlider');
        const imageResizeValueDisplay = document.getElementById('imageResizeValueDisplay');
        const imageResizeModalCloseBtn = document.getElementById('imageResizeModalCloseBtn');
        let currentImageToResize = null;


        // ذخیره محتوای ورد در localStorage
        const WORD_STORAGE_KEY = "wordDocument";
        function saveWordContent() {
          localStorage.setItem(WORD_STORAGE_KEY, wordEditor.innerHTML);
        }
        function loadWordContent() {
          const html = localStorage.getItem(WORD_STORAGE_KEY) || '';
          wordEditor.innerHTML = html;
          setTimeout(() => {
            setupAllImageInteractions(); // Renamed function
          }, 80); // Delay to ensure content is rendered
        }
        function clearWordContent() {
          wordEditor.innerHTML = '';
          saveWordContent();
        }
        wordSaveBtn.onclick = saveWordContent;
        wordClearBtn.onclick = clearWordContent;

        // دانلود به صورت فایل HTML (ورد)
        wordDownloadBtn.onclick = () => {
          const blob = new Blob([
            `<html dir="rtl"><head><meta charset="UTF-8"><title>سند ورد شما</title></head><body style="font-family:'Vazirmatn',Tahoma,sans-serif;">${wordEditor.innerHTML}</body></html>`
          ], { type: "text/html" });
          const a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          a.download = "document.html";
          a.click();
          setTimeout(()=>URL.revokeObjectURL(a.href), 250);
        };

        // چاپ
        wordPrintBtn.onclick = () => {
          const w = window.open('', '', 'width=900,height=700');
          w.document.write(`<html dir="rtl"><head><meta charset="UTF-8"><title>چاپ سند</title>
          <style>body{font-family:'Vazirmatn',Tahoma,Arial,sans-serif;direction:rtl;padding:2rem;} img{max-width:95%;border-radius:0.7rem;display:block;margin:0.4rem auto;}</style>
          </head><body>${wordEditor.innerHTML}</body></html>`);
          w.document.close();
          w.focus();
          w.print();
          setTimeout(()=>w.close(), 1200);
        };

        // ابزارهای ورد
        toolbar.addEventListener('click', function(e) {
          if (e.target.closest('button') && e.target.closest('button').dataset.cmd) {
            const btn = e.target.closest('button');
            const cmd = btn.dataset.cmd;
            document.execCommand(cmd, false, null);
            wordEditor.focus();
          }
        });

        // سایز فونت
        wordFontSize.onchange = function() {
          document.execCommand('fontSize', false, this.value);
          wordEditor.focus();
        };
        // فونت
        wordFontFamily.onchange = function() {
          document.execCommand('fontName', false, this.value);
          wordEditor.focus();
        };
        // رنگ
        wordColor.value = "#000"; // Default color
        wordColor.oninput = function() {
          document.execCommand('foreColor', false, this.value);
          wordEditor.focus();
        };
        // رنگ پس‌زمینه
        wordBgColor.oninput = function() {
          document.execCommand('hiliteColor', false, this.value);
          wordEditor.focus();
        };

        // درج تصویر
        wordInsertImage.onclick = function() {
          wordImageInput.click();
        };
        wordImageInput.onchange = function() {
          if (this.files && this.files[0]) {
            const file = this.files[0];
            const reader = new FileReader();
            reader.onload = function(e) {
              insertImageWithInteractions(e.target.result);
            };
            reader.readAsDataURL(file);
          }
          this.value = ""; // reset for next use
        };

        // درج تصویر با قابلیت کلیک برای تغییر اندازه
        function insertImageWithInteractions(src) {
          const wrapper = document.createElement('span');
          wrapper.className = "word-img-wrapper";
          wrapper.contentEditable = "false";
          wrapper.style.display = "inline-block";
          wrapper.style.position = "relative";
          wrapper.style.verticalAlign = "middle";

          const img = document.createElement('img');
          img.src = src;
          img.style.width = "340px"; // Default width
          img.style.maxWidth = "99%";
          img.style.height = "auto";
          img.setAttribute("draggable", "false");

          wrapper.appendChild(img);
          wordEditor.focus();

          insertNodeAtCaret(wrapper);
          setupImageInteractions(wrapper);
          saveWordContent();
        }

        function insertNodeAtCaret(node) {
          let sel = window.getSelection();
          if (!sel.rangeCount) {
            wordEditor.appendChild(node);
          } else {
            let range = sel.getRangeAt(0);
            range.collapse(false);
            range.insertNode(node);
            range.setStartAfter(node);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
          }
        }

        // اعمال قابلیت کلیک برای تغییر اندازه به همه تصاویر موجود
        function setupAllImageInteractions() {
          const imgs = Array.from(wordEditor.querySelectorAll("img"));
          imgs.forEach(img => {
            if (img.closest(".word-img-wrapper")) {
              setupImageInteractions(img.closest(".word-img-wrapper"));
            } else {
              const wrapper = document.createElement('span');
              wrapper.className = "word-img-wrapper";
              wrapper.style.display = "inline-block";
              wrapper.style.position = "relative";
              wrapper.style.verticalAlign = "middle";
              wrapper.setAttribute("contenteditable", "false");
              
              const clonedImg = img.cloneNode(true);
              if (!clonedImg.style.width) clonedImg.style.width = "340px";
              clonedImg.style.height = "auto";
              clonedImg.setAttribute("draggable", "false");

              wrapper.appendChild(clonedImg);
              img.replaceWith(wrapper);
              setupImageInteractions(wrapper);
            }
          });
        }

        // تنظیم قابلیت کلیک روی تصویر برای باز کردن مودال تغییر سایز
        function setupImageInteractions(wrapper) {
          if (!wrapper.classList.contains('word-img-wrapper')) return;
          const img = wrapper.querySelector('img');
          if (!img) return;

          Array.from(wrapper.querySelectorAll('.word-img-resize-handle')).forEach(h => h.remove());

          if (!img.style.width) img.style.width = "340px";
          img.style.height = "auto";
          img.style.cursor = 'pointer';

          wrapper.removeAttribute("draggable");
          img.removeAttribute("draggable");

          const openResizeModal = function(e) {
            e.stopPropagation(); 
            currentImageToResize = img;
        

            let currentWidth = parseInt(img.style.width, 10);
            if (isNaN(currentWidth) || img.style.width.includes('%')) {
                currentWidth = img.offsetWidth;
            }
            currentWidth = Math.max(parseInt(imageResizeSlider.min, 10), Math.min(parseInt(imageResizeSlider.max, 10), currentWidth));
            
            imageResizeSlider.value = currentWidth;
         
            imageResizeValueDisplay.textContent = currentWidth;
            imageResizeModal.style.display = 'flex';

            wordEditor.querySelectorAll("img.word-img-selected").forEach(im => im.classList.remove("word-img-selected"));
            img.classList.add("word-img-selected");
          };

          img.onclick = openResizeModal;
          wrapper.onclick = openResizeModal;
        }

        // Event Listeners for the new Image Resize Modal
        if (imageResizeSlider) {
          imageResizeSlider.addEventListener('input', function() {
            if (currentImageToResize) {
              const newWidth = this.value;
              currentImageToResize.style.width = newWidth + 'px';
              currentImageToResize.style.height = 'auto';
              
              imageResizeValueDisplay.textContent = newWidth;
            }
          });

          imageResizeSlider.addEventListener('change', function() {
              if (currentImageToResize) {
                  saveWordContent();
              }
          });
        }

        if (imageResizeModalCloseBtn) {
          imageResizeModalCloseBtn.addEventListener('click', function() {
            imageResizeModal.style.display = 'none';
            if (currentImageToResize) {
              currentImageToResize.classList.remove("word-img-selected");
            }
            currentImageToResize = null;
          });
        }
        
        if (imageResizeModal) {
          imageResizeModal.addEventListener('click', function(e) {
              if (e.target === imageResizeModal) {
                  imageResizeModal.style.display = 'none';
                  if (currentImageToResize) {
                      currentImageToResize.classList.remove("word-img-selected");
                  }
                  currentImageToResize = null;
              }
          });
        }
        
        // میانبرهای کیبورد حرفه‌ای
        wordEditor.addEventListener('keydown', function(e) {
          if (e.ctrlKey || e.metaKey) {
            if (e.key === "s") { e.preventDefault(); saveWordContent(); }
            if (e.key === "b") { e.preventDefault(); document.execCommand("bold"); }
            if (e.key === "i") { e.preventDefault(); document.execCommand("italic"); }
            if (e.key === "u") { e.preventDefault(); document.execCommand("underline"); }
            if (e.key === "z") { e.preventDefault(); document.execCommand("undo"); }
            if (e.key === "y" || (e.shiftKey && e.key === "z")) { e.preventDefault(); document.execCommand("redo"); }
          }
        });

        // بازخوانی سند ورد هنگام لود
        loadWordContent();

        // ذخیره خودکار هنگام تغییر محتوا و بررسی تصاویر
        wordEditor.addEventListener('input', function() {
          saveWordContent();
          setTimeout(setupAllImageInteractions, 100);
        });

        // drag & drop image (from file system)
        wordEditor.addEventListener('drop', function(e) {
          if (e.dataTransfer && e.dataTransfer.files.length) {
            e.preventDefault();
            Array.from(e.dataTransfer.files).forEach(file => {
              if (file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onload = function(ev) {
                  insertImageWithInteractions(ev.target.result);
                };
                reader.readAsDataURL(file);
              }
            });
          }
        });

        // جلوگیری از paste استایل ناخواسته
        wordEditor.addEventListener("paste", function(e) {
          e.preventDefault();
          let contentToInsert = "";
          const clipboardData = e.clipboardData || window.clipboardData;

          if (clipboardData) {
              const types = clipboardData.types;
              if (types.includes("text/html")) {
                  let html = clipboardData.getData("text/html");
                  const tempDiv = document.createElement("div");
                  tempDiv.innerHTML = html;
                  
                  tempDiv.querySelectorAll("script, style, link, meta").forEach(el => el.remove());
                  tempDiv.querySelectorAll("*").forEach(el => {
                      el.removeAttribute("style");
                      el.removeAttribute("class");
                      for (let i = el.attributes.length - 1; i >= 0; i--) {
                          const attrName = el.attributes[i].name;
                          if (attrName.startsWith("on")) {
                              el.removeAttribute(attrName);
                          }
                      }
                  });
                  contentToInsert = tempDiv.innerHTML;

              } else if (types.includes("text/plain")) {
                  contentToInsert = clipboardData.getData("text/plain").replace(/\n/g, "<br>");
              }
          }
          
          if (contentToInsert) {
              document.execCommand("insertHTML", false, contentToInsert);
          }
          
          setTimeout(setupAllImageInteractions, 100);
        });

        // مقدار پیش‌فرض رنگ متن برای نوشته جدید (در حالت دیفالت)
        wordEditor.style.color = "#222b3a";
        wordColor.value = "#000";
      })();

      // --- MAIN APPLICATION LOGIC (CALENDAR, TASKS, ETC.) ---
      window.onload = function () {
        // Ensure Word editor content is loaded and image interactions are set up
        // if the Word section is active on load or becomes active.
        // The Word-specific loadWordContent() is already called within its IIFE.
        // This window.onload is for the rest of the application.

        let todayJY, todayJM, todayJD;
        let calendarView = {};

        const persianMonths = [
          "", "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند",
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
          jy = parseInt(jy); jm = parseInt(jm); jd = parseInt(jd);
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
          let sal_a = [0, 31, leap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
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
          for (let m = 1; m < jm; m++) sum += m <= 6 ? 31 : m <= 11 ? 30 : 29; // Assumes non-leap for Esfand, adjust if precise needed
          return sum + jd;
        }
        function getLastDayOfMonth(jm, jy) {
          if (jm <= 6) return 31;
          if (jm <= 11) return 30;
          // Check for leap year for Esfand
          let kabise = [1, 5, 9, 13, 17, 22, 26, 30]; // These are remainders for jy % 33
          return kabise.includes(jy % 33) ? 30 : 29;
        }

        function updateDate() {
          let now = new Date();
          let { jy, jm, jd } = toJalali(now.getFullYear(), now.getMonth() + 1, now.getDate());
          todayJY = jy; todayJM = jm; todayJD = jd;
          document.getElementById("date").innerHTML = `<svg width="20" height="20" style="vertical-align:middle;opacity:.7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="18" rx="2" stroke="#fff" stroke-width="2.2"/><rect x="5.5" y="9" width="13" height="10" rx="2" fill="#ffffff" stroke="#4a76a8" stroke-width="1.5"/><text x="12" y="17" font-size="8" text-anchor="middle" fill="#4a76a8" font-weight="bold">${jd}</text></svg> ${jy}/${jm}/${jd}`;
          if (!calendarView.year || !calendarView.month) {
            calendarView = { year: jy, month: jm, selectedDay: jd };
          }
          renderCalendar();
          renderAll();
        }
        setInterval(updateDate, 60 * 1000); // Update date every minute

        function showMonthTitleModal() {
          const titleEl = document.querySelector(".calendar-header .month-title");
          if (titleEl) titleEl.classList.add("open");
          document.getElementById("monthTitleModalYear").value = calendarView.year || todayJY;
          document.getElementById("monthTitleModalMonth").value = calendarView.month || todayJM;
          document.getElementById("monthTitleModalError").innerText = "";
          document.getElementById("monthTitleModal").style.display = "flex";
          document.getElementById("monthTitleModalYear").focus();
        }
        function closeMonthTitleModal() {
          const titleEl = document.querySelector(".calendar-header .month-title");
          if (titleEl) titleEl.classList.remove("open");
          document.getElementById("monthTitleModal").style.display = "none";
        }
        document.getElementById("monthTitleModalCancelBtn").onclick = closeMonthTitleModal;
        document.getElementById("monthTitleModal").addEventListener("click", function (e) {
          if (e.target === document.getElementById("monthTitleModal")) closeMonthTitleModal();
        });
        document.getElementById("monthTitleModalShowBtn").onclick = function () {
          let y = parseInt(document.getElementById("monthTitleModalYear").value);
          let m = parseInt(document.getElementById("monthTitleModalMonth").value);
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
        document.addEventListener("click", function (e) {
          if (e.target.classList.contains("month-title") || (e.target.closest && e.target.closest(".month-title")))
            showMonthTitleModal();
        });
        function renderCalendar() {
          let jy = calendarView.year, jm = calendarView.month, sd = calendarView.selectedDay || 1;
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
          weekRow.innerHTML = persianWeekdays.map((d) => `<div>${d}</div>`).join("");
          calEl.append(weekRow);

          let g = toGregorian(jy, jm, 1);
          let firstDay = new Date(g.gy, g.gm - 1, g.gd).getDay();
          let offset = (firstDay + 1) % 7; // Shamsi weeks start Saturday (0 for JS getDay() is Sunday)
          let daysPrevMonth = 0, prevMonth = jm - 1, prevYear = jy;
          if (prevMonth === 0) { prevMonth = 12; prevYear--; }
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
            div.onclick = () => { calendarView = { year: prevYear, month: prevMonth, selectedDay: d }; renderCalendar(); };
            grid.append(div);
            daysShown++;
          }
          for (let d = 1; d <= daysInMonth; d++) {
            let div = document.createElement("div");
            div.className = "day";
            div.textContent = d;
            if (jy === todayJY && jm === todayJM && d === todayJD) div.classList.add("today");
            if (d === sd && jy === calendarView.year && jm === calendarView.month) div.classList.add("selected");
            div.onclick = () => { calendarView.selectedDay = d; renderCalendar(); };
            grid.append(div);
            daysShown++;
          }
          let nextMonth = jm + 1, nextYear = jy;
          if (nextMonth === 13) { nextMonth = 1; nextYear++; }
          let remain = (7 - (daysShown % 7)) % 7;
          for (let i = 1; i <= remain; i++) {
            let div = document.createElement("div");
            div.className = "day other-month";
            div.textContent = i;
            div.title = `${persianMonths[nextMonth]} ${nextYear}`;
            div.onclick = () => { calendarView = { year: nextYear, month: nextMonth, selectedDay: i }; renderCalendar(); };
            grid.append(div);
          }
          calEl.append(grid);

          document.getElementById("btn-prev-month").onclick = () => {
            let m = calendarView.month - 1, y = calendarView.year;
            if (m === 0) { m = 12; y--; }
            calendarView.month = m; calendarView.year = y;
            let maxDay = getLastDayOfMonth(m, y);
            if (calendarView.selectedDay > maxDay) calendarView.selectedDay = maxDay;
            renderCalendar();
          };
          document.getElementById("btn-next-month").onclick = () => {
            let m = calendarView.month + 1, y = calendarView.year;
            if (m === 13) { m = 1; y++; }
            calendarView.month = m; calendarView.year = y;
            let maxDay = getLastDayOfMonth(m, y);
            if (calendarView.selectedDay > maxDay) calendarView.selectedDay = maxDay;
            renderCalendar();
          };
        }

        function showCustomDateModal() {
          document.getElementById("customDateYear").value = calendarView.year || todayJY;
          document.getElementById("customDateMonth").value = calendarView.month || todayJM;
          document.getElementById("customDateDay").value = calendarView.selectedDay || todayJD;
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
            if (isNaN(d) || d < 1 || d > maxDay) error = `روز باید بین ۱ تا ${maxDay} باشد`;
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
            if (isNaN(val) || val < 0) { /* console.error("Invalid input"); */ return; }
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
            typeVal = item.frequency ? "quantitative" : "timed"; // Assuming 'timed' is similar to 'quantitative' for this modal
          }
          document.getElementById("modalBox").innerHTML = `
          <button id="modalDelete" class="delete-icon-btn" title="حذف"><svg width="18" height="18" style="vertical-align:middle" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 3L8 4.5H4v2h16v-2h-4zM5 8v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8H5zm4 2h2v8h-2v-8z"/></svg></button>
          <p>ویرایش مورد</p>
          <label>عنوان:</label>
          <input type="text" id="modalEditTitle" value="${item.text || ""}" />
          <label>نوع:</label>
          <select id="modalEditType">
            <option value="boolean" ${typeVal == "boolean" ? "selected" : ""}>تیک‌زدنی</option>
            <option value="quantitative" ${typeVal == "quantitative" ? "selected" : ""}>کمی</option>
            <option value="timed" ${typeVal == "timed" ? "selected" : ""}>زمانی</option>
          </select>
          <div id="modalEditTotalContainer" style="margin-top:6px;${typeVal == "boolean" ? "display:none" : ""}">
            <label>مقدار کل:</label>
            <input type="number" id="modalEditTotal" value="${item.total || ""}" min="1" />
          </div>
          <div id="modalEditDoneContainer" style="margin-top:6px;${typeVal == "boolean" ? "display:none" : ""}">
            <label>مقدار ثبت‌شده:</label>
            <input type="number" id="modalEditDone" value="${item.done || ""}" min="0" />
          </div>
          <button id="modalEditSave" class="btn-green">ذخیره ویرایش</button>
          <button id="modalClose">انصراف</button>
        `;
          document.getElementById("modalOverlay").style.display = "flex";

          document.getElementById("modalEditType").onchange = (e) => {
            const v = e.target.value;
            document.getElementById("modalEditTotalContainer").style.display = v == "boolean" ? "none" : "block";
            document.getElementById("modalEditDoneContainer").style.display = v == "boolean" ? "none" : "block";
          };

          document.getElementById("modalEditSave").onclick = () => {
            const newText = document.getElementById("modalEditTitle").value.trim();
            const newType = document.getElementById("modalEditType").value;
            let newTotal = parseInt(document.getElementById("modalEditTotal")?.value);
            let newDone = parseInt(document.getElementById("modalEditDone")?.value);
            if (!newText) { /* console.error("Title is required"); */ return; }
            let updated = { ...item, text: newText };
            if (newType === "quantitative" || newType === "timed") {
              if (isNaN(newTotal) || newTotal < 1) { /* console.error("Total value is invalid"); */ return; }
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

        function canGoalBeChecked(goalItem, callbackIfAllowed, callbackIfNotAllowed) {
          if (!goalItem.frequency) return callbackIfAllowed();
          let now = new Date();
          let dayOfWeek = now.getDay(); // Sunday = 0, ..., Friday = 5, Saturday = 6
          let currentJalali = toJalali(now.getFullYear(), now.getMonth() + 1, now.getDate());
          let frequency = goalItem.frequency;

          if (frequency === "daily") return callbackIfAllowed();
          if (frequency === "weekly") {
            if (dayOfWeek === 5) return callbackIfAllowed(); // Friday
            let daysToFriday = (5 - dayOfWeek + 7) % 7;
            if (daysToFriday === 0) daysToFriday = 7;
            return callbackIfNotAllowed(`تنها در روز جمعه می‌توانید هدف هفتگی را ثبت کنید. ${daysToFriday} روز تا جمعه باقی مانده است.`);
          }
          if (frequency === "monthly") {
            let lastDayOfMonth = getLastDayOfMonth(currentJalali.jm, currentJalali.jy);
            if (currentJalali.jd === lastDayOfMonth) return callbackIfAllowed();
            return callbackIfNotAllowed(`تنها در آخر ماه می‌توانید هدف ماهانه را ثبت کنید. ${lastDayOfMonth - currentJalali.jd} روز تا پایان ماه باقی مانده است.`);
          }
          if (frequency === "yearly") {
            let isLeap = [1,5,9,13,17,22,26,30].includes(currentJalali.jy % 33);
            let daysInYear = isLeap ? 366 : 365;
            let dayOfYear = jalaliDayOfYear(currentJalali.jy, currentJalali.jm, currentJalali.jd);
            if (dayOfYear === daysInYear) return callbackIfAllowed();
            return callbackIfNotAllowed(`تنها در روز آخر سال می‌توانید هدف سالانه را ثبت کنید. ${daysInYear - dayOfYear} روز تا پایان سال مانده است.`);
          }
          callbackIfAllowed();
        }

        function renderList(key, elm, btn) {
          let list = getData(key), ul = document.getElementById(elm), bt = document.getElementById(btn);
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
              if (it.total !== undefined) { // Quantitative or Timed
                if (!it.done || it.done < it.total) { // Show "ثبت" only if not fully done
                    let btnSet = document.createElement("button");
                    btnSet.innerText = "ثبت";
                    btnSet.onclick = () => {
                    if (key === "goals" && it.frequency) {
                        canGoalBeChecked(it, () => {
                        showInputModal("مقدار انجام‌شده را وارد کنید", (val) => {
                            it.done = Math.min(val, it.total); // Cap at total
                            saveData(key, list); renderAll();
                        }, it.done || 0); // Default to current done value
                        }, (msg) => showPopup(msg));
                    } else {
                        showInputModal("مقدار انجام‌شده را وارد کنید", (val) => {
                        it.done = Math.min(val, it.total); // Cap at total
                        saveData(key, list); renderAll();
                        }, it.done || 0);
                    }
                    };
                    act.append(btnSet);
                }
                let btnE = document.createElement("button");
                btnE.innerText = "ویرایش";
                btnE.onclick = () => {
                  showEditModal(it, (updated, newType) => {
                    if (newType === "boolean") {
                      delete updated.total; delete updated.done;
                    } else {
                      updated.total = updated.total || 1;
                      updated.done = Math.min(updated.done || 0, updated.total); // Ensure done <= total
                    }
                    list[i] = updated; saveData(key, list); renderAll();
                  }, () => { list.splice(i, 1); saveData(key, list); renderAll(); });
                };
                act.append(btnE);
              } else { // Boolean
                let cb = document.createElement("input");
                cb.type = "checkbox";
                cb.checked = it.checked;
                cb.onchange = () => {
                  if (key === "goals" && it.frequency) {
                    canGoalBeChecked(it, () => {
                      it.checked = cb.checked; saveData(key, list); renderAll();
                    }, (msg) => { cb.checked = !cb.checked; showPopup(msg); });
                  } else {
                    it.checked = cb.checked; saveData(key, list); renderAll();
                  }
                };
                act.append(cb);

                let btnE = document.createElement("button");
                btnE.innerText = "ویرایش";
                btnE.onclick = () => {
                  showEditModal(it, (updated, newType) => {
                     if (newType === "boolean") {
                      delete updated.total; delete updated.done;
                    } else {
                      updated.total = updated.total || 1;
                      updated.done = updated.done || 0;
                    }
                    list[i] = updated; saveData(key, list); renderAll();
                  }, () => { list.splice(i, 1); saveData(key, list); renderAll(); });
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
        const typeContainer = document.getElementById("type-container"); // This seems to always be block
        const typeSelect = document.getElementById("new-type");
        const valueContainer = document.getElementById("value-container");

        categorySelect.addEventListener("change", (e) => {
          const val = e.target.value;
          goalOptions.style.display = val === "goal" ? "block" : "none";
          typeSelect.value = "boolean"; // Reset type
          valueContainer.style.display = "none"; // Reset value container
        });

        typeSelect.addEventListener("change", (e) => {
          const t = e.target.value;
          valueContainer.style.display = (t === "quantitative" || t === "timed") ? "block" : "none";
        });

        document.getElementById("btn-menu").onclick = function () {
          const nav = document.getElementById("nav");
          const hamburger = document.getElementById("btn-menu");
          nav.classList.toggle("show");
          hamburger.classList.toggle("active");
        };
        document.querySelectorAll("nav li").forEach((li) => {
          li.onclick = () => {
            document.querySelectorAll("nav li").forEach((x) => x.classList.remove("active"));
            li.classList.add("active");
            document.querySelectorAll("section").forEach((s) => s.classList.remove("active"));
            document.getElementById(li.dataset.section).classList.add("active");
            document.getElementById("nav").classList.remove("show");
            document.getElementById("btn-menu").classList.remove("active");
            if (li.dataset.section === "new") {
              document.getElementById("btn-save-new").innerText = "ذخیره";
              document.getElementById("new-title").value = "";
              document.getElementById("new-total").value = "";
              categorySelect.value = "task";
              typeSelect.value = "boolean";
              valueContainer.style.display = "none";
              goalOptions.style.display = "none";
            }
          };
        });

        ["btn-add-task-if-empty", "btn-add-limit-if-empty", "btn-add-goal-if-empty"].forEach((id) => {
          document.getElementById(id).onclick = () => document.querySelector('nav li[data-section="new"]').click();
        });

        document.getElementById("btn-save-new").onclick = () => {
          const category = categorySelect.value;
          const type = typeSelect.value;
          const title = document.getElementById("new-title").value.trim();
          if (!title) return showPopup("لطفا عنوان را وارد کنید");
          let key = category === "task" ? "tasks" : category === "limit" ? "limits" : "goals";
          const list = getData(key);

          const item = { text: title, checked: false };
          if (type === "quantitative" || type === "timed") {
            const totalVal = +document.getElementById("new-total").value;
            if (isNaN(totalVal) || totalVal < 1) return showPopup("مقدار کل باید عدد مثبت باشد");
            item.total = totalVal;
            item.done = 0;
          }
          if (category === "goal") {
            item.frequency = document.getElementById("goal-frequency").value;
          }
          list.push(item);
          saveData(key, list);
          showPopup("با موفقیت ذخیره شد");
          
          document.getElementById("new-title").value = "";
          document.getElementById("new-total").value = "";
          categorySelect.value = "task";
          typeSelect.value = "boolean";
          valueContainer.style.display = "none";
          goalOptions.style.display = "none";
          renderAll();
        };

        document.getElementById("btn-save-report").onclick = () => {
          const tp = document.getElementById("report-type").value;
          const txt = document.getElementById("report-text").value.trim();
          if (!txt) return showPopup("گزارش خالی است");
          
          let now = new Date();
          let currentJalali = toJalali(now.getFullYear(), now.getMonth() + 1, now.getDate());
          let dayOfWeek = now.getDay(); 
          let dayOfYear = jalaliDayOfYear(currentJalali.jy, currentJalali.jm, currentJalali.jd);

          if (tp === "weekly" && dayOfWeek !== 5) 
            return showPopup(((5 - dayOfWeek + 7) % 7 || 7) + " روز تا جمعه مانده");
          if (tp === "monthly") {
            const last = getLastDayOfMonth(currentJalali.jm, currentJalali.jy);
            if (currentJalali.jd !== last)
              return showPopup(last - currentJalali.jd + " روز تا پایان ماه مانده");
          }
          if (tp === "yearly") {
              const isLeap = [1,5,9,13,17,22,26,30].includes(currentJalali.jy % 33);
              const daysInYear = isLeap ? 366 : 365;
              if (dayOfYear !== daysInYear)
               return showPopup(daysInYear - dayOfYear + " روز تا پایان سال مانده");
          }
          const reps = getData("reports");
          reps.push({ type: tp, date: `${currentJalali.jy}/${currentJalali.jm}/${currentJalali.jd}`, text: txt });
          saveData("reports", reps);
          document.getElementById("report-text").value = "";
          showPopup("گزارش ذخیره شد");
        };

        updateDate(); // Initial call to set date, calendar, and lists
      };