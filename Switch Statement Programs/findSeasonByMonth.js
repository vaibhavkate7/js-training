function findSeasonByMonth(month) {
  switch (month) {
    case 'December':
    case 'January':
    case 'February':
      console.log("winter")
      return;
    case 'March':
    case 'April':
    case 'May':
      console.log("Spring")
      return;
    case 'June':
    case 'July':
    case 'August':
      console.log("summer")
      return;
    case 'September':
    case 'October':
    case 'November':
      console.log("autumn")
      return;
    default:
      console.log("invalid")
  }
}

findSeasonByMonth('November')