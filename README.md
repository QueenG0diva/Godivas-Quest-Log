# Godiva's Quest Log

Godiva's Quest Log is a Twine script that allows you to create and manage quests for your interactive fiction games. With this script, you can easily add, update, complete, and fail quests, all while providing a user-friendly interface for players to track their progress.

## Features

* **Quest Creation**: Easily create new quests with titles and descriptions.

* **Quest Status**: Assign a status to each quest, including "In Progress," "Completed," or "Failed."

* **Failure Reasons**: If a quest fails, you can add a reason for the failure.

* **Tabbed Interface**: Organize quests by status with tabbed navigation.
  
*  **Counts**: See the number of active quests for each status category.

## Installation

1. Download and extract the zip file.
2. Open questLog.js and copy/paste it into your Twine Story Javascript section as-is.
3. Open questLog.css and copy/paste it into your Twine Story Stylesheet section as-is.
4. Create a new passage and title it questLog.
5. Open up the questLog Passage file and copy/paste it into that new passage. 

## Adding Quests

To add quests to the quest journal, use the following code in the passage you want the quest to be activated.

```
<<run addQuest("Quest Title", "Quest Description")>>
```
An example would be:
```
<<run addQuest("Go home", "After shopping for your weekly groceries, it is time to go back home.")>>
```

## Updating Quest Status
To update your quest journal, use the following codes in the passage you want the quest to be marked as completed or failed. You will never need to mark a quest as "in-progress", as it will automatically be tagged that upon activation.

**Completed**:
```
<<run completeQuest("Quest Title")>>
```

**Failure**:
```
<<run failQuest("Quest Title", "Failure Reason")>>
```

## Issues
If you run into any issues, feel free to contact me on Discord: @QueenGodiva.
