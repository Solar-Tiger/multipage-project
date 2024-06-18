export function loadFFXIVJourneyHomepage() {
  const ffxivJourneyContent = document.getElementById('content');

  console.log(ffxivJourneyContent);

  const containerDiv = document.createElement('div');

  ffxivJourneyContent.textContent = '';

  const p = document.createElement('p');

  p.textContent = 'TESTING';

  containerDiv.appendChild(p);

  ffxivJourneyContent.appendChild(containerDiv);
}
