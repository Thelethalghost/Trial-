document.addEventListener('DOMContentLoaded', function () {
    // Load content when the page initially loads
    loadContentFromHash();
    
    // Listen for hash changes
    window.addEventListener('hashchange', loadContentFromHash);
});

function loadContentFromHash() {
    // Get the fragment identifier from the URL
    var fragment = window.location.hash;

    // Remove the '#' character
    var heading = fragment.slice(1);

    // Get the content file
    var contentFile = 'content.txt';

    // Load and display content
    loadContent(heading, contentFile);
}

function loadContent(heading, contentFile) {
    fetch(contentFile)
        .then(function (response) {
            return response.text();
        })
        .then(function (text) {
            var content = parseContent(text, heading);
            document.getElementById('content').innerHTML = content;
        })
        .catch(function (error) {
            console.error('Error loading content: ' + error);
            document.getElementById('content').innerHTML = '<div style="text-align: center; padding-top:200px; padding-bottom: 150px;"><h1>404: Not Found</h1></div>';
        });
}

function parseContent(text, heading) {
    var lines = text.split('\n');
    var content = '';
    var reading = false;
    var reset = true;
    var listreset = false;

    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];

        if (line.startsWith('#')) {
            if (reading) {
                break;
            }

            if (line === '#' + heading) {
                reading = true;
                reset = true;
            }
        } else if (reading) {
            if (reset == true){
                content += '<h1 style="text-align: center; color: #fbc8b1;">' + line + '</h1><br>';
                reset = false;

            }
            
            else{
                if (line.includes('Region') || line.includes('Responsibilities:') || line.includes('About') || line.includes('Salary:')) {
                    content += '<br><h3>' + line + '</h3><br>';
                }
                else {
                    if (line.includes(':')){
                        if(listreset == false){
                            listreset= true;
                            content += '<br><ul>'
                        }
                    }
                    else {
                        if (listreset == true){
                            content += '</ul>';
                        }
                        listreset = false;
                    }
                    if (listreset == true){
                        content += '<li>' + line + '</li><br>';
                    }
                    else {
                        content += line + '<br>';
                    }
                }
             }
        }
    }
    if (content === '') {
        content = '<div style="text-align: center; padding-top:200px; padding-bottom: 150px;"><h1>404: Not Found</h1></div>';
    }
    return content;
}
