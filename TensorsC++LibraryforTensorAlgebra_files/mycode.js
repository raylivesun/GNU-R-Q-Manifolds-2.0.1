bindEvent(window, 'load', mycode_onload);

function mycode_onload() {
    mycode_fixlinks();
}

function mycode_fixlinks() {
  if (document.getElementById('manual-nav')) { return; }
  var navbar = document.getElementById('nav');
  if (!navbar) { return; }

  var i, j, k;
  var seenNav = false;
  for (i = 0; i < navbar.parentNode.childNodes.length; i++) {
    var node = navbar.parentNode.childNodes[i];
    if (!seenNav) { 
      if (node.id == 'nav') {
        seenNav = true;
      }
      continue;
    }
    if ((node.tagName != 'p' ) && (node.tagName != 'P' ) &&
        (node.tagName != 'ul') && (node.tagName != 'UL') &&
        (node.tagName != 'ol') && (node.tagName != 'OL')) {
        continue;
    }
    for (j = 0; j < node.childNodes.length; j++) {
      var nn = node.childNodes[j];
      if ((nn.tagName == 'li') || (nn.tagName == 'LI')) {
        for (k = 0; k < nn.childNodes.length; k++) {
          mycode_setlink(nn.childNodes[k]);
        }
      }
      mycode_setlink(nn);
    }
  }
}

function mycode_setlink(elem) {
  if ((elem.tagName != 'a') && (elem.tagName != 'A')) { return; }
  if (elem.id == '') { return; }
  if (elem.id.substring(0,7) == 'docfigs') {
      var res = elem.id.split("/");
      console.log(res);
      var str = '<img border=2 src="'+res[0]+'/'+res[1]+'" align="center" ';
      if (res.length > 2) {
          if (res[2] != '') {
              str += 'height='+res[2];
          }
      }
      elem.innerHTML = str + ' />';
      console.log(elem.innerHTML);
      elem.href = res[0] + '/' + res[1]
  } else {
      var root = "http://git.savannah.gnu.org/cgit/tensors.git/tree/";
      elem.innerHTML='<b><code>~/tensors/'+elem.id+'</code></b>';
      elem.href = root + elem.id;
  }
  return;
}
