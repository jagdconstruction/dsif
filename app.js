/* DSIF Mobile Web Form (template-fill export)
   - Categories/questions match the provided DSIF PDF
   - Per-category: collapse toggle, N/A checkbox (hides checklist), photo capture/upload
   - Signature: popup draw (Option B)
   - Save PDF: fills the original DSIF template PDF, flattens, then appends photo pages
*/

const FORM_DEF = {"projectOptions": ["  ", "69th St. Transfer Bridge", "BA-2024-RE-102-CM Mid-Hudson Bridge", "BRX9579 - Boston Road Bridge", "BW96 & VN12 - Whitestone Hellman Platforms", "C35311 - Dyre Ave. Line", "D214898 - TANE22-29 Restani T&M", "D264324 - Westchester County Field Metalizing", "D264965 - Highway bridge repair W&W", "D265046 - Highway bridge repair W&W", "D265307 - WO03", "D265343 - Bove W&W 2", "Devon Bridge", "DMB-25-01", "FCC 2056", "Gold Star Memorial Bridge", "Governors Island", "Grand Concourse", "GW 244.289 Lemoine Ave", "GWB Cables", "HB1070MD - Macombs Dam Bridge", "HBKBQE - NYCDOT Bove", "K7279 & K6176 Gordie Howe", "Park Avenue", "Pulaski 8B", "QBB-2017", "RK90", "Sandy Relief", "VN81X", "VN-84B - Verrazzano Bridge Ramps Brooklyn", "Warehouse"], "categories": [{"id": "blast_and_paint", "title": "Blast and Paint", "type": "checklist", "parent": null, "questions": [{"text": "Are all hoses, couplings, whipchecks, and fittings properly secured?", "yesField": "Check Box86.0.0", "noField": "Check Box86.0.1", "commentField": "Text85"}, {"text": "Are all deadmen fully operational?", "yesField": "Check Box86.1.0", "noField": "Check Box86.1.1", "commentField": "Platform Repairs PerformedAre all deadmen fully operational"}, {"text": "Blast hoods and other proper PPE is being used in good working order?", "yesField": "Check Box86.2.0", "noField": "Check Box86.2.1", "commentField": "Platform Repairs PerformedBlast hoods and other proper PPE is being used in good working order"}, {"text": "Are spray gun safety tips on and knuckle guard and safety lock in good working order?", "yesField": "Check Box86.3.0", "noField": "Check Box86.3.1", "commentField": "Platform Repairs PerformedAre spray gun safety tips on and knuckle guard and safety lock in good working order"}, {"text": "Are all filters (organic vapor and dust) regular end of life change cycle checked?", "yesField": "Check Box86.4.0", "noField": "Check Box86.4.1", "commentField": "Platform Repairs PerformedAre all filters organic vapor and dust regular end of life change cycle checked"}]}, {"id": "platform_scaffold", "title": "Platform/Scaffold", "type": "checklist", "parent": null, "questions": [{"text": "Decking checked for loose sheets and use of self tapping screws to secure overlaps inside work area?", "yesField": "Check Box90.0.0", "noField": "Check Box90.0.1", "commentField": "Text101"}, {"text": "Decking checked for missing or loose clips inside of work area?", "yesField": "Check Box90.1.0", "noField": "Check Box90.1.1", "commentField": "Platform Repairs PerformedDecking checked for missing or loose clips inside of work area"}, {"text": "Tie-ups checked for equal tension to keep platform level inside of work area?", "yesField": "Check Box90.2.0", "noField": "Check Box90.2.1", "commentField": "Platform Repairs PerformedTieups checked for equal tension to keep platform level inside of work area"}, {"text": "Perimeter protection in good working order and/or 100% tieoff enforced on platforms?", "yesField": "Check Box90.3.0", "noField": "Check Box90.3.1", "commentField": "Platform Repairs PerformedPerimeter protection in good working order andor 100 tieoff enforced on platforms"}, {"text": "Platfrom checked for any debris inside of work area?", "yesField": "Check Box90.4.0", "noField": "Check Box90.4.1", "commentField": "Platform Repairs PerformedPlatfrom checked for any debris inside of work area"}]}, {"id": "containment", "title": "Containment", "type": "checklist", "parent": null, "questions": [{"text": "Inspection of the containment for integrity (Sealing of joints and openings, floor covering, make-up air openings and employee entrance area).", "yesField": "Check Box91.0.0", "noField": "Check Box91.0.1", "commentField": "CommentsContainment Inspection of the containment for integrity Sealing of joints and openings floor covering makeup air openings and employee entrance area"}, {"text": "Was the containment dry before blasting?", "yesField": "Check Box91.1.0", "noField": "Check Box91.1.1", "commentField": "CommentsWas the containment dry before blasting"}, {"text": "Were the dust collectors and vacuum machine fully functional throughout the blasting period?", "yesField": "Check Box91.2.0", "noField": "Check Box91.2.1", "commentField": "CommentsWere the dust collectors and vacuum machine fully functional throughout the blasting period"}, {"text": "Inspection of the containment for final cleaning.", "yesField": "Check Box91.3.0", "noField": "Check Box91.3.1", "commentField": "CommentsInspect on of the conta nment for f na c eaning"}]}, {"id": "visible_emissions", "title": "Visible Emissions", "type": "visible_emissions", "rows": [{"label": "Observation 1", "locationsField": "LocationsVisible Emissions", "timeField": "TimeVisible Emissions", "observationField": "Observation PeriodVisible Emissions", "emissionField": "Emission TimeVisible Emissions"}, {"label": "Observation 2", "locationsField": "LocationsVisible Emissions_2", "timeField": "TimeVisible Emissions_2", "observationField": "Observation PeriodVisible Emissions_2", "emissionField": "Emission TimeVisible Emissions_2"}], "commentsField": "CommentsCorrectionsVisible Emissions"}, {"id": "work_area", "title": "Work Area", "type": "checklist", "parent": null, "questions": [{"text": "Is the restricted work area segregated with caution tape & Signs?", "yesField": "Check Box92.0.0", "noField": "Check Box92.0.1", "commentField": "Text100"}, {"text": "Are employees and others working and/or entering into the restricted work areas using required PPE?", "yesField": "Check Box92.1.0", "noField": "Check Box92.1.1", "commentField": "CommentsAre employees and others working andor entering into the restricted work areas using required PPE"}, {"text": "Inspection of the work area for any evidence of spillage or dust accumulation", "yesField": "Check Box92.2.0", "noField": "Check Box92.2.1", "commentField": "CommentsInspection of the work area for any evidence of spillage or dust accumulation"}]}, {"id": "decontamination_area", "title": "Decontamination Area", "type": "checklist", "parent": null, "questions": [{"text": "Inspection of the decontamination area for cleanliness and functionality of the wash station?", "yesField": "Check Box93.0.0", "noField": "Check Box93.0.1", "commentField": "Text99"}, {"text": "Inspection of the decon for soap, water, towels and clean work clothing?", "yesField": "Check Box93.1.0", "noField": "Check Box93.1.1", "commentField": "CommentsInspection of the decon for soap water towels and clean work clothing"}, {"text": "Did employees exposed above the PEL take showers at the end of the work day?", "yesField": "Check Box93.2.0", "noField": "Check Box93.2.1", "commentField": "CommentsDid employees exposed above the PEL take showers at the end of the work day"}, {"text": "Was dirty clothing sent to an offsite location for cleaning on this day?", "yesField": "Check Box93.3.0", "noField": "Check Box93.3.1", "commentField": "CommentsWas dirty clothing sent to an offsite location for cleaning on this day"}, {"text": "Was contaminated water shipped on this day?", "yesField": "Check Box93.4.0", "noField": "Check Box93.4.1", "commentField": "CommentsWas contaminated water shipped on this day"}, {"text": "Are Respirators being properly maintained, cleaned and stored?", "yesField": "Check Box93.5.0", "noField": "Check Box93.5.1", "commentField": "CommentsAre Respirators being properly maintained cleaned and stored"}]}, {"id": "waste_area", "title": "Waste Area", "type": "checklist", "parent": null, "questions": [{"text": "Is the hazardous waste area secure?", "yesField": "Check Box94.0.0", "noField": "Check Box94.0.1", "commentField": "Text98"}, {"text": "Is the hazardous waste properly stored?", "yesField": "Check Box94.1.0", "noField": "Check Box94.1.1", "commentField": "CommentsIs the hazardous waste properly stored"}, {"text": "Has any waste been stored over 60 days?", "yesField": "Check Box94.2.0", "noField": "Check Box94.2.1", "commentField": "CommentsHas any waste been stored over 60 days"}, {"text": "Was the hazardous waste area inspected for cleanliness and whether any additional clean-up required?", "yesField": "Check Box94.3.0", "noField": "Check Box94.3.1", "commentField": "CommentsWas the hazardous waste area inspected for cleanliness and whether any additional cleanup required"}, {"text": "Was hazardous waste shipped on this day?", "yesField": "Check Box94.4.0", "noField": "Check Box94.4.1", "commentField": "CommentsWas hazardous waste shipped on this day"}]}, {"id": "life_safety", "title": "Life Safety", "type": "checklist", "parent": null, "questions": [{"text": "Availability and functionality of safety and other equipment inside and outside of the containment?", "yesField": "Check Box95.0.0", "noField": "Check Box95.0.1", "commentField": "CommentsAvailability and functionality of safety and other equipment inside and outside of the containment"}, {"text": "Are first aid kits readily available at the work site?", "yesField": "Check Box95.1.0", "noField": "Check Box95.1.1", "commentField": "CommentsAre first aid kits readily available at the work site"}, {"text": "Testing and calibration check on CO monitors?", "yesField": "Check Box95.2.0", "noField": "Check Box95.2.1", "commentField": "CommentsTesting and calibration check on CO monitors"}, {"text": "Any accidents reported on this date?", "yesField": "Check Box95.3.0", "noField": "Check Box95.3.1", "commentField": "CommentsAny accidents reported on this date"}, {"text": "Any safety violations or warnings issued on this date?", "yesField": "Check Box95.4.0", "noField": "Check Box95.4.1", "commentField": "CommentsAny safety violations or warnings issued on this date"}]}, {"id": "testing", "title": "Testing", "type": "checklist", "parent": null, "questions": [{"text": "Have all workers received medical clearances (blood and fit tests) to wear a respirator and work with Lead?", "yesField": "Check Box96.0.0", "noField": "Check Box96.0.1", "commentField": "CommentsHave all workers received medical clearances blood and fit tests to wear a respirator and work with Lead"}, {"text": "Have all workers received annual lead training?", "yesField": "Check Box96.1.0", "noField": "Check Box96.1.1", "commentField": "CommentsHave all workers received annual lead training"}, {"text": "Any monitoring performed today (Air, Wipe, Water, Soil, Waste) Enter Date of when samples where sent for analysis__________", "yesField": "Check Box96.2.0", "noField": "Check Box96.2.1", "commentField": "CommentsAny monitoring performed today Air Wipe Water Soil Waste Enter Date of when samples where sent for analysis"}]}], "templatePdf": "dsif_template.pdf", "fields": {"project": "Project", "date": "Date", "print": "Print", "signatureRect": [351.928, 25.9628, 513.437, 43.6356], "attached": {"accident": "Check Box87", "incident": "Check Box88", "violation": "Check Box89"}}};

let photos = []; // { id, catId, catTitle, dataUrl, w, h, mime }
let currentPhotoCat = null;
let sigDataUrl = null;

// Attached Pages files (Accident/Incident/Violation)
// { accident|incident|violation: { name, kind: 'pdf'|'image', mime, bytes?, dataUrl? } | null }
let attachedPages = {
  accident: null,
  incident: null,
  violation: null,
};

const ATTACHED_PAGE_DEFS = [
  { key: 'accident', checkboxId: 'attAccident', label: 'Near Miss Report' },
  { key: 'incident', checkboxId: 'attIncident', label: 'Incident Report' },
  { key: 'violation', checkboxId: 'attViolation', label: 'Safety Violation' },
];

function $(id){ return document.getElementById(id); }

function cryptoId(){
  if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
  return String(Date.now()) + '_' + Math.random().toString(16).slice(2);
}

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
}

function setTodayIfEmpty(input){
  if (!input) return;
  if (!input.value) {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth()+1).padStart(2,'0');
    const dd = String(d.getDate()).padStart(2,'0');
    input.value = `${yyyy}-${mm}-${dd}`;
  }
}

function formatMMDDYYYY(isoDate){
  // isoDate: YYYY-MM-DD
  if (!isoDate) return "";
  const m = /^\d{4}-\d{2}-\d{2}$/.test(isoDate) ? isoDate : "";
  if (!m) return "";
  const [y,mo,d] = isoDate.split('-');
  return `${mo}/${d}/${y}`;
}

function init(){
  renderTopProjectOptions();
  wireProjectCustom();
  renderCategories();
  wireActionButtons();
  wirePhotoInput();
  wireAttachedPages();
  initSignature();

  setTodayIfEmpty($("fReportDate"));
  updateAllPhotoBadges();
}

function renderTopProjectOptions(){
  const sel = $("fProject");
  sel.innerHTML = "";

  // Clone options so we can safely augment them.
  const opts = Array.isArray(FORM_DEF.projectOptions) ? [...FORM_DEF.projectOptions] : [];

  // Ensure a blank option exists at the top.
  if (!opts.length || String(opts[0]).trim() !== "") {
    opts.unshift("  ");
  }

  // Ensure RK19-A exists in the project dropdown.
  const hasRK19A = opts.some(o => String(o).trim() === "RK19-A");
  if (!hasRK19A) {
    // Prefer inserting after RK90 if present; otherwise append.
    const idx = opts.findIndex(o => String(o).trim() === "RK90");
    if (idx >= 0) opts.splice(idx + 1, 0, "RK19-A");
    else opts.push("RK19-A");
  }

  // If a prior custom project was entered, keep it available.
  const lastCustom = (function(){
    try { return (localStorage.getItem('dsif_project_custom') || '').trim(); }
    catch(e){ return ""; }
  })();
  if (lastCustom && !opts.some(o => String(o).trim() === lastCustom)) {
    opts.push(lastCustom);
  }

  // Render base options.
  for (const opt of opts){
    const o = document.createElement('option');
    o.value = opt;
    o.textContent = opt.trim() ? opt : "";
    sel.appendChild(o);
  }

  // Add Custom entry option at the end.
  const custom = document.createElement('option');
  custom.value = "__CUSTOM__";
  custom.textContent = "Custom…";
  sel.appendChild(custom);
}

function wireProjectCustom(){
  const sel = $("fProject");
  if (!sel) return;

  sel.addEventListener('change', function(){
    if (sel.value !== "__CUSTOM__") return;

    let prev = "";
    try { prev = (localStorage.getItem('dsif_project_custom') || '').trim(); } catch(e) { prev = ""; }

    const entered = window.prompt("Enter project name", prev);

    if (entered && entered.trim()) {
      const val = entered.trim();

      try { localStorage.setItem('dsif_project_custom', val); } catch(e) {}

      // If the option doesn't exist yet, insert it just before Custom…
      let opt = Array.from(sel.options).find(o => o.value === val);
      if (!opt){
        opt = document.createElement('option');
        opt.value = val;
        opt.textContent = val;
        // Insert before the Custom… option
        const customOpt = sel.querySelector('option[value="__CUSTOM__"]');
        if (customOpt) sel.insertBefore(opt, customOpt);
        else sel.appendChild(opt);
      }

      sel.value = val;
    } else {
      // Revert to blank.
      sel.selectedIndex = 0;
    }
  });
}

function wireActionButtons(){
  // Bind all reset/save buttons (top + bottom).
  // Prefer data-action, but also fall back to known IDs for backward compatibility.
  const resetEls = new Set([
    ...Array.from(document.querySelectorAll('[data-action="reset"]')),
    $("btnReset"),
    $("btnResetBottom"),
  ].filter(Boolean));

  const saveEls = new Set([
    ...Array.from(document.querySelectorAll('[data-action="save"]')),
    $("btnSave"),
    $("btnSaveBottom"),
  ].filter(Boolean));

  resetEls.forEach(b => b.addEventListener('click', resetAll));
  saveEls.forEach(b => b.addEventListener('click', savePdf));
}

function wireAttachedPages(){
  let input = $("attachInput");
  // Backward compatible: if the HTML input doesn't exist, create it.
  if (!input){
    input = document.createElement('input');
    input.id = 'attachInput';
    input.type = 'file';
    input.accept = 'application/pdf,image/*';
    input.className = 'hidden';
    document.body.appendChild(input);
  }

  let pendingKey = null;

  function setFileLabel(key){
    let el = $("attFile_" + key);
    if (!el){
      // If not present, create a label span next to the checkbox for this attachment.
      const def = ATTACHED_PAGE_DEFS.find(d => d.key === key);
      const cb = def ? $(def.checkboxId) : null;
      const wrap = cb ? cb.closest('label') : null;
      if (wrap){
        el = document.createElement('span');
        el.id = 'attFile_' + key;
        el.className = 'att-file';
        el.title = 'Tap to change attached file';
        wrap.appendChild(el);
      }
    }
    if (!el) return;
    const item = attachedPages[key];
    if (item && item.name){
      el.textContent = item.name;
      el.classList.add('has-file');
    } else {
      el.textContent = '';
      el.classList.remove('has-file');
    }
  }

  function openPickerFor(key){
    pendingKey = key;
    input.value = ''; // allow re-selecting same file
    input.click();
  }

  // Checkbox behavior: checking prompts a file chooser
  for (const def of ATTACHED_PAGE_DEFS){
    const cb = $(def.checkboxId);
    if (!cb) continue;

    cb.addEventListener('change', () => {
      if (cb.checked){
        openPickerFor(def.key);
      } else {
        attachedPages[def.key] = null;
        setFileLabel(def.key);
      }
    });

    setFileLabel(def.key);

    // Tapping the filename allows replacing the attached file
    const labelEl = $("attFile_" + def.key);
    if (labelEl && !labelEl.dataset.wired){
      labelEl.dataset.wired = '1';
      labelEl.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (cb.checked){
          openPickerFor(def.key);
        }
      });
    }
  }

  input.addEventListener('change', async () => {
    if (!pendingKey) return;

    const def = ATTACHED_PAGE_DEFS.find(d => d.key === pendingKey);
    const cb = def ? $(def.checkboxId) : null;

    const file = (input.files && input.files[0]) ? input.files[0] : null;
    if (!file){
      // User canceled -> uncheck and clear
      if (cb) cb.checked = false;
      attachedPages[pendingKey] = null;
      setFileLabel(pendingKey);
      pendingKey = null;
      return;
    }

    try{
      if (String(file.type).toLowerCase() === 'application/pdf'){
        const bytes = new Uint8Array(await file.arrayBuffer());
        attachedPages[pendingKey] = { name: file.name, kind: 'pdf', mime: file.type, bytes };
      } else if (String(file.type).toLowerCase().startsWith('image/')){
        // Convert to JPEG for consistent PDF embedding
        const scaled = await readAndDownscaleImage(file, 2200, 0.88);
        attachedPages[pendingKey] = { name: file.name, kind: 'image', mime: 'image/jpeg', dataUrl: scaled.dataUrl };
      } else {
        alert('Unsupported file type. Please attach a PDF or an image.');
        if (cb) cb.checked = false;
        attachedPages[pendingKey] = null;
      }
    } catch(err){
      console.warn('Could not attach file', err);
      alert('Could not attach that file. Try a PDF or a photo from your device.');
      if (cb) cb.checked = false;
      attachedPages[pendingKey] = null;
    }

    setFileLabel(pendingKey);
    pendingKey = null;
  });
}

function renderCategories(){
  const host = $("categories");
  host.innerHTML = "";

  for (const cat of FORM_DEF.categories){
    const wrap = document.createElement('div');
    wrap.className = 'cat';
    wrap.dataset.catId = cat.id;

    // Header
    const header = document.createElement('div');
    header.className = 'cat-header';

    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.className = 'cat-toggle';

    const chevron = document.createElement('div');
    chevron.className = 'cat-chevron';
    chevron.textContent = '▾';

    const title = document.createElement('div');
    title.className = 'cat-title';
    title.textContent = cat.title;

    toggleBtn.appendChild(chevron);
    toggleBtn.appendChild(title);

    const actions = document.createElement('div');
    actions.className = 'cat-actions';

    // N/A
    const naLabel = document.createElement('label');
    naLabel.className = 'cat-na';
    naLabel.innerHTML = `<input type="checkbox" id="na_${escapeHtml(cat.id)}"/> <span>N/A</span>`;
    actions.appendChild(naLabel);

    // Attach photos
    const attachBtn = document.createElement('button');
    attachBtn.type = 'button';
    attachBtn.className = 'btn';
    attachBtn.style.padding = '10px 10px';
    attachBtn.textContent = 'Attach';
    attachBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openPhotoPicker(cat.id, cat.title);
    });
    actions.appendChild(attachBtn);

    // Photo count
    const badge = document.createElement('div');
    badge.className = 'badge';
    badge.textContent = '0';
    badge.dataset.role = 'photoCount';
    actions.appendChild(badge);

    header.appendChild(toggleBtn);
    header.appendChild(actions);

    // Body
    const body = document.createElement('div');
    body.className = 'cat-body';
    body.dataset.role = 'body';

    if (cat.type === 'visible_emissions'){
      body.appendChild(renderVisibleEmissions(cat));
    } else {
      (cat.questions || []).forEach((q, idx) => {
        body.appendChild(renderQuestion(cat, q, idx));
      });
    }

    // Thumbnails row
    const thumbs = document.createElement('div');
    thumbs.className = 'thumb-row';
    thumbs.dataset.role = 'thumbRow';
    body.appendChild(thumbs);

    // Wire toggle
    toggleBtn.addEventListener('click', () => {
      const na = $(`na_${cat.id}`);
      if (na && na.checked) return; // N/A keeps it collapsed
      body.classList.toggle('hidden');
      chevron.textContent = body.classList.contains('hidden') ? '▸' : '▾';
    });

    // Wire N/A
    const naCb = naLabel.querySelector('input');
    naCb.addEventListener('change', () => {
      const isNA = naCb.checked;
      if (isNA){
        body.classList.add('hidden');
        chevron.textContent = '▸';
      }
    });

    wrap.appendChild(header);
    wrap.appendChild(body);
    host.appendChild(wrap);

    // initial collapsed state: expanded
    body.classList.remove('hidden');
    chevron.textContent = '▾';
  }
}

function renderQuestion(cat, q, idx){
  const row = document.createElement('div');
  row.className = 'q';

  const t = document.createElement('div');
  t.className = 'q-text';
  t.textContent = q.text;
  row.appendChild(t);

  const yn = document.createElement('div');
  yn.className = 'yn';

  const yes = makeYNButton(cat.id, idx, 'Yes');
  const no = makeYNButton(cat.id, idx, 'No');

  yn.appendChild(yes);
  yn.appendChild(no);
  row.appendChild(yn);

  const c = document.createElement('div');
  c.className = 'comment';
  c.innerHTML = `<input id="cmt_${escapeHtml(cat.id)}_${idx}" type="text" placeholder="Comments (optional)" maxlength="80"/>`;
  row.appendChild(c);

  return row;
}

function makeYNButton(catId, idx, val){
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'yn-btn';
  b.textContent = val;
  b.dataset.catId = catId;
  b.dataset.qIdx = String(idx);
  b.dataset.val = val;

  b.addEventListener('click', () => {
    const na = $(`na_${catId}`);
    if (na && na.checked) return;

    const parent = b.parentElement;
    parent.querySelectorAll('.yn-btn').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
  });

  return b;
}

function renderVisibleEmissions(cat){
  const box = document.createElement('div');

  const note = document.createElement('div');
  note.className = 'small-note';
  note.style.margin = '10px 0 12px 0';
  note.textContent = 'Up to two visible emission observations (matches the original DSIF layout).';
  box.appendChild(note);

  const makeRow = (n, label) => {
    const card = document.createElement('div');
    card.style.border = '1px solid var(--border)';
    card.style.borderRadius = '14px';
    card.style.padding = '12px';
    card.style.margin = '10px 0';

    const title = document.createElement('div');
    title.style.fontWeight = '900';
    title.style.marginBottom = '8px';
    title.textContent = label;
    card.appendChild(title);

    const grid1 = document.createElement('div');
    grid1.className = 'grid-2';
    grid1.innerHTML = `
      <label class="field"><span class="label">Location</span><input id="ve_loc_${n}" type="text" placeholder="Location" maxlength="40"/></label>
      <label class="field"><span class="label">Time</span><input id="ve_time_${n}" type="time"/></label>
    `;
    card.appendChild(grid1);

    const grid2 = document.createElement('div');
    grid2.className = 'grid-2';
    grid2.innerHTML = `
      <label class="field"><span class="label">Observation Period</span><input id="ve_obs_${n}" type="text" placeholder="e.g. 10 min" maxlength="30"/></label>
      <label class="field"><span class="label">Emission Time</span><input id="ve_em_${n}" type="text" placeholder="e.g. 2 min" maxlength="30"/></label>
    `;
    card.appendChild(grid2);

    return card;
  };

  box.appendChild(makeRow(1, 'Observation 1'));
  box.appendChild(makeRow(2, 'Observation 2'));

  const c = document.createElement('label');
  c.className = 'field';
  c.innerHTML = `<span class="label">Comments / Corrections</span>`;
  const ta = document.createElement('textarea');
  ta.id = 've_comments';
  ta.rows = 3;
  ta.placeholder = 'Comments / Corrections (optional)';
  ta.maxLength = 120;
  c.appendChild(ta);
  box.appendChild(c);

  return box;
}

function openPhotoPicker(catId, catTitle){
  currentPhotoCat = { id: catId, title: catTitle };
  const inp = $("photoInput");
  inp.value = "";
  inp.click();
}

function wirePhotoInput(){
  $("photoInput").addEventListener('change', async (e) => {
    if (!currentPhotoCat) return;
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    for (const file of files){
      try{
        const scaled = await readAndDownscaleImage(file, 1600, 0.86);
        photos.push({
          id: cryptoId(),
          catId: currentPhotoCat.id,
          catTitle: currentPhotoCat.title,
          dataUrl: scaled.dataUrl,
          w: scaled.w,
          h: scaled.h,
          mime: scaled.mime
        });
      } catch(err){
        console.warn('Could not load image', err);
      }
    }

    updateCategoryThumbs(currentPhotoCat.id);
    updateAllPhotoBadges();
  });
}

async function readAndDownscaleImage(file, maxDim=1600, jpegQuality=0.86){
  const dataUrl = await readFileAsDataUrl(file);
  const img = await loadImage(dataUrl);

  let w = img.width;
  let h = img.height;
  const s = Math.min(1, maxDim / Math.max(w, h));
  const outW = Math.max(1, Math.round(w * s));
  const outH = Math.max(1, Math.round(h * s));

  const canvas = document.createElement('canvas');
  canvas.width = outW;
  canvas.height = outH;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, outW, outH);

  // Always export as JPEG to keep PDFs smaller
  const outDataUrl = canvas.toDataURL('image/jpeg', jpegQuality);
  return { dataUrl: outDataUrl, w: outW, h: outH, mime: 'image/jpeg' };
}

function loadImage(dataUrl){
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = dataUrl;
  });
}

function readFileAsDataUrl(file){
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result);
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}

function updateAllPhotoBadges(){
  document.querySelectorAll('.cat').forEach(catEl => {
    const catId = catEl.dataset.catId;
    const count = photos.filter(p => p.catId === catId).length;
    const badge = catEl.querySelector('[data-role="photoCount"]');
    if (badge) badge.textContent = String(count);
    updateCategoryThumbs(catId);
  });
}

function updateCategoryThumbs(catId){
  const catEl = document.querySelector(`.cat[data-cat-id="${CSS.escape(catId)}"]`);
  if (!catEl) return;
  const row = catEl.querySelector('[data-role="thumbRow"]');
  if (!row) return;

  row.innerHTML = '';
  const list = photos.filter(p => p.catId === catId);
  for (const p of list){
    const wrap = document.createElement('div');
    wrap.className = 'thumb-wrap';

    const img = document.createElement('img');
    img.className = 'thumb';
    img.src = p.dataUrl;
    img.alt = `${p.catTitle} photo`;

    const del = document.createElement('button');
    del.type = 'button';
    del.className = 'thumb-del';
    del.textContent = '×';
    del.addEventListener('click', (e) => {
      e.stopPropagation();
      photos = photos.filter(x => x.id !== p.id);
      updateCategoryThumbs(catId);
      updateAllPhotoBadges();
    });

    wrap.appendChild(img);
    wrap.appendChild(del);
    row.appendChild(wrap);
  }
}

function resetAll(){
  if (!confirm('Reset this form? This clears all selections, comments, photos, and signature.')) return;

  $("fProject").selectedIndex = 0;
  $("fReportDate").value = '';
  setTodayIfEmpty($("fReportDate"));

  $("attAccident").checked = false;
  $("attIncident").checked = false;
  $("attViolation").checked = false;

  // Clear any uploaded "Attached Pages" documents
  attachedPages.accident = null;
  attachedPages.incident = null;
  attachedPages.violation = null;
  // Clear labels if present
  const lfA = $("attFile_accident"); if (lfA){ lfA.textContent=''; lfA.classList.remove('has-file'); }
  const lfI = $("attFile_incident"); if (lfI){ lfI.textContent=''; lfI.classList.remove('has-file'); }
  const lfV = $("attFile_violation"); if (lfV){ lfV.textContent=''; lfV.classList.remove('has-file'); }

  // Categories
  for (const cat of FORM_DEF.categories){
    const na = $(`na_${cat.id}`);
    if (na) na.checked = false;

    const catEl = document.querySelector(`.cat[data-cat-id="${CSS.escape(cat.id)}"]`);
    if (!catEl) continue;
    const body = catEl.querySelector('[data-role="body"]');
    const chev = catEl.querySelector('.cat-chevron');
    if (body){ body.classList.remove('hidden'); }
    if (chev){ chev.textContent = '▾'; }

    if (cat.type === 'visible_emissions'){
      $("ve_loc_1").value = '';
      $("ve_time_1").value = '';
      $("ve_obs_1").value = '';
      $("ve_em_1").value = '';
      $("ve_loc_2").value = '';
      $("ve_time_2").value = '';
      $("ve_obs_2").value = '';
      $("ve_em_2").value = '';
      $("ve_comments").value = '';
    } else {
      (cat.questions || []).forEach((q, idx) => {
        document.querySelectorAll(`.yn-btn[data-cat-id="${CSS.escape(cat.id)}"][data-q-idx="${idx}"]`).forEach(b => b.classList.remove('active'));
        const c = $(`cmt_${cat.id}_${idx}`);
        if (c) c.value = '';
      });
    }
  }

  // Bottom
  $("fPrintName").value = '';
  sigDataUrl = null;
  clearCanvas($("sigPreview"));
  const hint = document.querySelector('.sig-hint');
  if (hint) hint.style.display = '';

  photos = [];
  updateAllPhotoBadges();
}

function getYNValue(catId, idx){
  const btn = document.querySelector(`.yn-btn.active[data-cat-id="${CSS.escape(catId)}"][data-q-idx="${idx}"]`);
  return btn ? btn.dataset.val : '';
}

function getCommentValue(catId, idx){
  const el = $(`cmt_${catId}_${idx}`);
  return el ? (el.value || '').trim() : '';
}

function getCategoryNA(catId){
  const na = $(`na_${catId}`);
  return !!(na && na.checked);
}

async function savePdf(){
  const saveButtons = new Set([
    ...Array.from(document.querySelectorAll('[data-action="save"]')),
    $("btnSave"),
    $("btnSaveBottom"),
  ].filter(Boolean));

  const saveButtonsArr = Array.from(saveButtons);
  saveButtonsArr.forEach(b => {
    b.disabled = true;
    b.dataset.oldText = b.textContent;
    b.textContent = 'Saving…';
  });

  try{
    const templateBytes = await fetch(FORM_DEF.templatePdf).then(r => r.arrayBuffer());
    const pdfDoc = await PDFLib.PDFDocument.load(templateBytes);
    const form = pdfDoc.getForm();

    const font = await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);

    // --- Top fields ---
    const proj = ($("fProject").value || '').trim();
    safeSelectDropdown(form, FORM_DEF.fields.project, proj);

    // Use the form's report date for stamping N/A comments; fallback to today's date
    const reportIso = $("fReportDate").value || new Date().toISOString().slice(0,10);
    const reportText = formatMMDDYYYY(reportIso);
    const naStamp = `Not applicable for today ${reportText}`;
    safeSetText(form, FORM_DEF.fields.date, reportText);

    safeSetCheckbox(form, FORM_DEF.fields.attached.accident, $("attAccident").checked);
    safeSetCheckbox(form, FORM_DEF.fields.attached.incident, $("attIncident").checked);
    safeSetCheckbox(form, FORM_DEF.fields.attached.violation, $("attViolation").checked);

    // --- Categories ---
    for (const cat of FORM_DEF.categories){
      const isNA = getCategoryNA(cat.id);

      if (cat.type === 'visible_emissions'){
        if (isNA){
          // Clear fields, set comments to N/A
          for (const row of cat.rows){
            safeSetText(form, row.locationsField, '');
            safeSetText(form, row.timeField, '');
            safeSetText(form, row.observationField, '');
            safeSetText(form, row.emissionField, '');
          }
          safeSetText(form, cat.commentsField, naStamp);
        } else {
          safeSetText(form, cat.rows[0].locationsField, ($("ve_loc_1").value || '').trim());
          safeSetText(form, cat.rows[0].timeField, ($("ve_time_1").value || '').trim());
          safeSetText(form, cat.rows[0].observationField, ($("ve_obs_1").value || '').trim());
          safeSetText(form, cat.rows[0].emissionField, ($("ve_em_1").value || '').trim());

          safeSetText(form, cat.rows[1].locationsField, ($("ve_loc_2").value || '').trim());
          safeSetText(form, cat.rows[1].timeField, ($("ve_time_2").value || '').trim());
          safeSetText(form, cat.rows[1].observationField, ($("ve_obs_2").value || '').trim());
          safeSetText(form, cat.rows[1].emissionField, ($("ve_em_2").value || '').trim());

          safeSetText(form, cat.commentsField, ($("ve_comments").value || '').trim());
        }

        continue;
      }

      // checklist type
      const qs = cat.questions || [];
      if (isNA){
        // Uncheck everything; stamp every comment cell so the saved PDF clearly shows N/A for this category
        qs.forEach((q, idx) => {
          safeSetCheckbox(form, q.yesField, false);
          safeSetCheckbox(form, q.noField, false);
          safeSetText(form, q.commentField, naStamp);
        });
      } else {
        qs.forEach((q, idx) => {
          const val = getYNValue(cat.id, idx);
          const comment = getCommentValue(cat.id, idx);

          safeSetCheckbox(form, q.yesField, val === 'Yes');
          safeSetCheckbox(form, q.noField, val === 'No');
          safeSetText(form, q.commentField, comment);
        });
      }
    }

    // --- Bottom fields ---
    safeSetText(form, FORM_DEF.fields.print, ($("fPrintName").value || '').trim());

    // Update field appearances so values are visible everywhere
    try{
      form.updateFieldAppearances(font);
    } catch(e){
      // ignore
    }

    // Flatten to lock in appearance and remove interactive widgets
    try{
      form.flatten();
    } catch(e){
      // ignore
    }

    // Signature: draw image on first page (Option B)
    if (sigDataUrl){
      const sigBytes = dataUrlToUint8Array(sigDataUrl);
      const sigImg = await pdfDoc.embedPng(sigBytes);
      const page = pdfDoc.getPages()[0];
      const [x0,y0,x1,y1] = FORM_DEF.fields.signatureRect;
      const boxW = x1-x0;
      const boxH = y1-y0;
      const pad = 1.0;

      const maxW = Math.max(1, boxW - pad*2);
      const maxH = Math.max(1, boxH - pad*2);

      const s = Math.min(maxW / sigImg.width, maxH / sigImg.height);
      const drawW = sigImg.width * s;
      const drawH = sigImg.height * s;
      const x = x0 + (boxW - drawW)/2;
      const y = y0 + (boxH - drawH)/2;
      page.drawImage(sigImg, { x, y, width: drawW, height: drawH });
    }

    // Attached Pages documents (Accident/Incident/Violation)
    // If a checkbox is checked, the corresponding uploaded file is appended after the DSIF page.
    for (const def of ATTACHED_PAGE_DEFS){
      const cb = $(def.checkboxId);
      if (!cb || !cb.checked) continue;
      const item = attachedPages[def.key];
      if (!item) continue;

      if (item.kind === 'pdf' && item.bytes){
        try{
          // Insert a header page before the PDF pages
          {
            const page = pdfDoc.addPage([612, 792]);
            const pageH = page.getHeight();
            const margin = 36;

            page.drawText(`${def.label} attachment`, { x: margin, y: pageH - margin - 18, size: 16, font });
            if (item.name){
              const safeName = String(item.name).slice(0, 80);
              page.drawText(safeName, { x: margin, y: pageH - margin - 38, size: 10, font });
            }
          }

          const srcDoc = await PDFLib.PDFDocument.load(item.bytes);
          const indices = srcDoc.getPageIndices();
          const copied = await pdfDoc.copyPages(srcDoc, indices);
          copied.forEach(p => pdfDoc.addPage(p));
        } catch(e){
          console.warn('Could not append attached PDF', e);
        }
      } else if (item.kind === 'image' && item.dataUrl){
        try{
          const page = pdfDoc.addPage([612, 792]);
          const pageW = page.getWidth();
          const pageH = page.getHeight();
          const margin = 36;

          page.drawText(`${def.label} attachment`, { x: margin, y: pageH - margin - 18, size: 16, font });
          if (item.name){
            const safeName = String(item.name).slice(0, 80);
            page.drawText(safeName, { x: margin, y: pageH - margin - 38, size: 10, font });
          }

          const headerH = 44;
          const maxW = pageW - margin*2;
          const maxH = pageH - (margin + headerH) - margin;

          const imgBytes = dataUrlToUint8Array(item.dataUrl);
          const img = await pdfDoc.embedJpg(imgBytes);

          const s = Math.min(maxW / img.width, maxH / img.height);
          const drawW = img.width * s;
          const drawH = img.height * s;
          const x = margin + (maxW - drawW)/2;
          const y = margin;
          page.drawImage(img, { x, y, width: drawW, height: drawH });
        } catch(e){
          console.warn('Could not append attached image', e);
        }
      }
    }

    // Photo pages
    const photoList = photos.slice();
    for (const p of photoList){
      const page = pdfDoc.addPage([612, 792]);
      const pageW = page.getWidth();
      const pageH = page.getHeight();
      const margin = 36;

      page.drawText(`${p.catTitle} photos`, {
        x: margin,
        y: pageH - margin - 18,
        size: 16,
        font,
      });

      const headerH = 44;
      const maxW = pageW - margin*2;
      const maxH = pageH - (margin + headerH) - margin;

      const imgBytes = dataUrlToUint8Array(p.dataUrl);
      const img = await pdfDoc.embedJpg(imgBytes);

      const s = Math.min(maxW / img.width, maxH / img.height);
      const drawW = img.width * s;
      const drawH = img.height * s;
      const x = margin + (maxW - drawW)/2;
      const y = margin;
      page.drawImage(img, { x, y, width: drawW, height: drawH });
    }

    const outBytes = await pdfDoc.save();
    const blob = new Blob([outBytes], { type: 'application/pdf' });

    const fileName = buildPdfFileName();
    downloadBlob(blob, fileName);

  } catch(err){
    console.error(err);
    alert('Could not generate the PDF. If you attached many large photos, try fewer photos.');
  } finally {
    saveButtonsArr.forEach(b => {
      b.disabled = false;
      b.textContent = b.dataset.oldText || 'Save PDF';
      delete b.dataset.oldText;
    });
  }
}

function buildPdfFileName(){
  const proj = ($("fProject").value || '').trim();
  const d = $("fReportDate").value || new Date().toISOString().slice(0,10);
  const safeProj = proj.replace(/[^\w\-]+/g, '_').replace(/_+/g,'_').slice(0, 30);
  return `DSIF_${d}${safeProj ? '_' + safeProj : ''}.pdf`;
}

function downloadBlob(blob, fileName){
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

function safeSetText(form, fieldName, value){
  if (!fieldName) return;
  try{
    const f = form.getTextField(fieldName);
    f.setText(value || '');
  } catch(e){
    // ignore
  }
}

function safeSelectDropdown(form, fieldName, value){
  if (!fieldName) return;
  try{
    const dd = form.getDropdown(fieldName);
    if (value){
      // If the value is not already an allowed option, add it (enables custom project text).
      try{
        const opts = dd.getOptions ? dd.getOptions() : [];
        const has = Array.isArray(opts) && opts.some(x => String(x) === String(value));
        if (!has && dd.addOptions){
          dd.addOptions([String(value)]);
        }
      } catch(e) {
        // ignore
      }

      dd.select(String(value));
    } else {
      // try to select blank option if present
      const opts = dd.getOptions();
      const blank = opts.find(x => !String(x).trim());
      if (blank !== undefined) dd.select(blank);
    }
  } catch(e){
    // ignore
  }
}

function safeSetCheckbox(form, fieldName, checked){
  if (!fieldName) return;
  try{
    const cb = form.getCheckBox(fieldName);
    if (checked) cb.check();
    else cb.uncheck();
  } catch(e){
    // ignore
  }
}

function dataUrlToUint8Array(dataUrl){
  const base64 = dataUrl.split(',')[1] || '';
  const bin = atob(base64);
  const len = bin.length;
  const bytes = new Uint8Array(len);
  for (let i=0;i<len;i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

/* Signature modal (Option B: draw) */
function initSignature(){
  const openBtn = $("sigOpen");
  const modal = $("sigModal");
  const canvas = $("sigCanvas");
  const preview = $("sigPreview");

  clearCanvas(preview);

  openBtn.addEventListener('click', async () => {
    modal.classList.remove('hidden');
    resizeSigCanvasToCss(canvas);
    clearCanvas(canvas);
    if (sigDataUrl){
      await drawDataUrlToCanvas(sigDataUrl, canvas);
    }
  });

  $("sigCancel").addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  $("sigClear").addEventListener('click', () => {
    clearCanvas(canvas);
  });

  $("sigSave").addEventListener('click', async () => {
    sigDataUrl = canvas.toDataURL('image/png');
    await drawDataUrlToCanvas(sigDataUrl, preview);
    modal.classList.add('hidden');
    const hint = document.querySelector('.sig-hint');
    if (hint) hint.style.display = 'none';
  });

  enableInk(canvas);
}

function enableInk(canvas){
  const ctx = canvas.getContext('2d');
  let drawing = false;
  let last = null;

  function getPos(e){
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);
    return {x,y};
  }

  function start(e){
    drawing = true;
    last = getPos(e);
    ctx.lineWidth = Math.max(3, canvas.height * 0.015);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#111';
  }

  function move(e){
    if (!drawing) return;
    const p = getPos(e);
    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    last = p;
  }

  function end(){
    drawing = false;
    last = null;
  }

  canvas.addEventListener('pointerdown', (e) => { e.preventDefault(); canvas.setPointerCapture(e.pointerId); start(e); });
  canvas.addEventListener('pointermove', (e) => { e.preventDefault(); move(e); });
  canvas.addEventListener('pointerup', (e) => { e.preventDefault(); end(); });
  canvas.addEventListener('pointercancel', (e) => { e.preventDefault(); end(); });
}

function clearCanvas(canvas){
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);
}

function resizeSigCanvasToCss(canvas){
  const rect = canvas.getBoundingClientRect();
  const scale = Math.min(2, window.devicePixelRatio || 1);
  canvas.width = Math.max(800, Math.floor(rect.width * scale));
  canvas.height = Math.max(280, Math.floor(rect.height * scale));
}

function drawDataUrlToCanvas(dataUrl, canvas){
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0,0,canvas.width,canvas.height);

      const pad = Math.max(10, canvas.width * 0.02);
      const maxW = canvas.width - pad*2;
      const maxH = canvas.height - pad*2;
      const s = Math.min(maxW / img.width, maxH / img.height);
      const w = img.width * s;
      const h = img.height * s;
      const x = (canvas.width - w)/2;
      const y = (canvas.height - h)/2;
      ctx.drawImage(img, x, y, w, h);
      resolve();
    };
    img.src = dataUrl;
  });
}

window.addEventListener('DOMContentLoaded', init);
