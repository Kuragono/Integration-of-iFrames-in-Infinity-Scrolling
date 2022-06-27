var dummy = document.createElement('div');
dummy.id = 'dm_conative_wrapper';
document.body.appendChild(dummy);
dummy.style.width = '100%';
dummy.style.height = '500px';
dummy.style.backgroundColor = 'green';



window.dm_element = window.dm_element ? window.dm_element +1 : 1;

var wrapper = document.querySelector("#dm_conative_wrapper");
if(wrapper) {

    wrapper.id = wrapper.id + '_' + window.dm_element;

    var dmf = document.createElement('iframe');
    dmf.id = `dm_iframe_${window.dm_element}`;
    

    dmf.onload = function() {
        dmf.contentWindow.context = {'location': document.location};
        //dmf.contentWindow['dmConativeData'] = {'adslot' : 2468};
        var dme = dmf.contentDocument.createElement('div');
        dme.id = 'c'; // Adslot Selector Element
        var dms = dmf.contentDocument.createElement('script');
        dms.src = 'https://cdn.conative.de/serve/domain/465/config.js?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_440}&adslot_id=2468&att=2'; // Config.js
        dms.async = 'true';
        dmf.contentDocument.body.appendChild(dme);
        dmf.contentDocument.body.appendChild(dms);
        

        const divElem = dmf.contentDocument.querySelector('#'+dme.id);
        resizeObserver.observe(divElem);
    }

const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    console.log('Size changed',entry.target.scrollHeight);
    let data = ['100%', entry.target.scrollHeight];
    window.parent.postMessage(data);
  }
});

wrapper.appendChild(dmf);


    window.addEventListener('message', ({data}) => {
        console.log(data);
        document.getElementById(`dm_iframe_${window.dm_element}`).style.height = `${data[1]}` + 'px';
    });


}