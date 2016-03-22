export class BackupManager {

  constructor(data) {
    this.data = data;
    this.backupData = this.copyByValue(data);
    this.hasChanges = false;
  }

  undoChanges() {
    this.data = this.copyByValue(this.backupData);
    this.hasChanges = false;
  }

  saveChanges() {
    this.backupData = this.copyByValue(this.data);
    this.hasChanges = false;
  }

  check() {
    let actualData = this.stringify(this.data);
    let backupData = this.stringify(this.backupData);
    this.hasChanges = (actualData !== backupData);
    return this.hasChanges;
  }

  copyByValue(data) {
    return JSON.parse(this.stringify(data));
  }

  stringify(data) {
    return JSON.stringify(this.sortByKey(data)).replace(/null/ig, '""');
  }

  sortByKey(unordered) {
    if (!unordered) {
      return null;
    }
    const ordered = {};
    Object.keys(unordered).sort().forEach(key => {
      if (Array.isArray(unordered[key])) {
        ordered[key] = unordered[key].map(obj=>{
          return this.sortByKey(obj);
        });
      } else if (typeof unordered[key] === 'object' && unordered[key] !== null) {
        ordered[key] = this.sortByKey(unordered[key]);
      } else {
        ordered[key] = unordered[key];
      }
    });
    return ordered;
  }
}
