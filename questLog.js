/***CUSTOM QUESTLOG MACRO***/
State.variables.questLog = State.variables.questLog || [];

window.addQuest = function(title, description, status = 'in-progress') {
    var newQuest = {
        title: title,
        description: description,
        status: status
    };
    State.variables.questLog.push(newQuest);
};

window.updateQuestStatus = function(title, newStatus, failureReason = '') {
    var quest = State.variables.questLog.find(q => q.title === title);
    if (quest) {
        quest.status = newStatus;
        quest.failureReason = failureReason;
    }
};

window.completeQuest = function(title) {
    window.updateQuestStatus(title, "completed");
};

window.failQuest = function(title, failureReason = '') {
    window.updateQuestStatus(title, "failed", failureReason);
};

window.setQuestTab = function(status) {
    var questLog = State.variables.questLog;
    var questContent = '';

    var inProgressCount = 0;
    var completedCount = 0;
    var failedCount = 0;

    for (var i = 0; i < questLog.length; i++) {
        if (questLog[i].status === 'in-progress') {
            inProgressCount++;
        } else if (questLog[i].status === 'completed') {
            completedCount++;
        } else if (questLog[i].status === 'failed') {
            failedCount++;
        }

        if (questLog[i].status === status) {
            var questClass = questLog[i].status === 'failed' ? ' failed-quest' : '';
            var questDescriptionClass = questLog[i].status === 'failed' ? ' failed-quest-description' : '';

            questContent += '<div class="quest-entry">' +
                            '<h2 class="quest-title' + questClass + '">' + questLog[i].title + '</h2>' +
                            '<p class="quest-description' + questDescriptionClass + '">' + questLog[i].description + '</p>' +
                            '<p class="quest-status">' + (questLog[i].status === 'failed' ? 'Status: <s>' + questLog[i].status + '</s>' : 'Status: ' + questLog[i].status) + '</p>';
            if (questLog[i].failureReason) {
                questContent += '<p class="failure-reason">Failure Reason: ' + questLog[i].failureReason + '</p>';
            }
            questContent += '</div>';
        }
    }

    document.getElementById('quest-content').innerHTML = questContent;

    // Update the tab labels with counts
    document.getElementById('in-progress-tab').innerText = 'In Progress (' + inProgressCount + ')';
    document.getElementById('completed-tab').innerText = 'Completed (' + completedCount + ')';
    document.getElementById('failed-tab').innerText = 'Failed (' + failedCount + ')';
};

$(document).on(':passagerender', function (ev) {
    if (ev.passage.title === "questLog") {
        setTimeout(function() {
            setQuestTab('in-progress');
        }, 0);
    }
});