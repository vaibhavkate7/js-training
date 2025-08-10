function checkName(name) {
  if (typeof (name) == "string") {
    if (name.toLowerCase() == "aniket") {
      console.log("Senior Developer")
    } else if (name.toLowerCase() == "vaibhav") {
      console.log("Junior Developer")
    } else {
      console.log("Unknown person")
    }

  } else {
    console.log("Invaid  name")
  }
}

checkName("vaiBhav");
