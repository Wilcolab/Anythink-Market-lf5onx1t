/* eslint-disable */
conn = new Mongo();
db = conn.getDB("anythink-market");
hasErrors = false;

print("");
print("=============================================================");

if (db.users.count() < 100) {
  hasErrors = true;
  print(
    "=!= ERROR: found less than 100 users in DB after running seeds script, found only " +
      db.users.count()
  );
}
if (db.items.count() < 100) {
  hasErrors = true;
  print(
    "=!= ERROR: found less than 100 items in DB after running seeds script, found only " +
      db.items.count()
  );
}
if (db.comments.count() < 100) {
  hasErrors = true;
  print(
    "=!= ERROR: found less than 100 comments in DB after running seeds script, found only " +
      db.comments.count()
  );
}

if (!hasErrors) {
  print("Great, looks like your database has some data in it!");
}
print("=============================================================");
print("");

if (hasErrors) {
  quit(1);
} else {
  quit(0);
}

/* eslint-enable */
