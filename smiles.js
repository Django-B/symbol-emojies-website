
const smiles = [
  ["Не знаЮ", '¯\\_(ツ)_/¯'],
  ["В гневе бросает стоЛ", "(╯°益°)╯彡┻━┻"],
  ["ПрикольнО", "w(ﾟｏﾟ)w"],
  ["Поставил стол на местО", "┬─┬ノ( º _ ºノ)"],
  ["СнайпеР", "(ﾒ｀ﾛ´)︻デ═一"],
  ["КуриТ", "◯Oo。(ー。ー)y~~"],
  ["Взял стол и устроил дебоШ", "(╮°-°)╮┳━━┳ ( ╯°□°)╯ ┻━━┻"],
  ["БоксеР", "Q(`⌒´Q)"],
  ["БомбанулО", "┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻"],
  ["ПодмигиваеТ", "(^_-)"],
  ["Отдает честЬ", "(￣^￣)ゞ"],
  ["ТерминатоР", "━╤デ╦︻(▀̿̿Ĺ̯̿̿▀̿ ̿)"],
  ["Крутой чеЛ", "┌(▀Ĺ̯▀)┐"],
  ["Показывает средний палеЦ", "凸(｀△´＃)"],
  ["Показывет средние пальцЫ", "	凸( ` ﾛ ´ )凸"],
  ["СпиТ", "[(－－)]..zzZ"],
  ["ОграблениЕ", "(҂` ﾛ ´)︻デ═一 ＼(º □ º l|l)/"],
  ["МеЧ", "(ಠ o ಠ)¤=[]:::::>"],
  ["КунаЙ", "(; ・_・)――――C"],
  ["Играют в тенниС", "ヽ(^o^)ρ┳┻┳°σ(^o^)ノ"],
  ["БокС", "(=O*_*)=O Q(*_*Q)"],
  ["ДеньгИ", "[̲̅$̲̅(̲̅100)̲̅$̲̅]"],
  ["В очкаХ", "(⌐■_■)"],
  ["ПросыпаетсЯ", "٩(ˊ〇ˋ*)و"],
  ["УдивлениЕ", "ヽ(ﾟ〇ﾟ)ﾉ"],
  ["ПодмигиваниЕ", "(^_<)"]
]



for (var x = 0; x < smiles.length; x++) {
  generateCard(smiles[x][0], smiles[x][1])
}


function generateCard(title, smile) {
    var div = document.createElement('div')
    div.innerHTML = `<button onclick=copy(this)><div class="card gradient-border">
    <p class="title">${title}</p>
    <div class="smile">
    <p>${smile}</p>
    </div>
    </div></button>`;
    document.getElementById('btns').appendChild(div);
}

function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
}

function copy(Element) {
    text = Element.getElementsByClassName("smile")[0].textContent
    console.log(text)
    copyTextToClipboard(text)
}