features:

- notes - first
- todo list- reminder
- pomodoro timer
- calendar

Requirement:
App is for me: Software developer, resource gatherer, Aspiring indie hacker

- will need a diverse way of storing notes
- Ways to use:
  - Store all grouped resources under a topic and that resource can lead to other resource
  - Taking notes on a certain topic which also gives me suggestions based on the category of the note
  - I want to share my notes with others so that they can also modify and review
  - When create a note, i would want flash cards to quickly revise.
  - When i am reading about the a topic i would want a list of flash cards to revise
  - I want to be able to print my flash cards.
  - I should be able to write mnemonics
  - I want to be able to reuse flash cards and rearrange the order and pile it in a resource
  - I want to use spaced-reptition technique for better understanding and sustaining the knowledege.
  - I want to take notes in a structured way

Flash Card Research:

- Images with written text are more easy to remember
- Creating flashcards while learning is an efficient way to remember
- A flashcard is of 2 sides one side is a question and another is a answer
- One flashcard per question
- It is easier for people to remember when they have written it themselves
- It is mainly used for active recall so a reminder would be handy to revise
- Premade flash cards will save more time for people but there is not opportunity for learning

types of data:
resource -> contain resources, notes and flashcards
notes -> contains detail and can contain flashcards and parent is a resource
flashcards -> contain information about a question

notes <<->> resource
notes ->> flashcards
resource <<->> flashcards

user -> resource

user:

- id not null
- name not null
- email not null
- mobile number
- description
- password not null
- profile_photo
- created_at not null
- updated at not null

resource:

- id not null
- title not null
- content
- parent_id -> leads to resource
- created_by - one user
- updated_by - can be multiple users
- created_at not null
- updated at not null

notes:

- id not null
- title not null
- content
- resource_id -> multiple resource ids
- created_by - one user
- updated_by - can be multiple users
- created_at not null
- updated at not null

flashcards

- id not null
- question
- answer
- resource_ids -> multiple resources
- notes_ids -> multiple ids
- created_by - one user
- created_at not null
- updated at not null

<!-- only for relation -->

resource_relation:

- id
- resource_id
- notes_id
- flashcard_id
- created_at not null

<!-- Todo -->

- Create resource and create resource under resource
- create notes under a common resource
- Add notes to a resource
- Create flashcards under a common resource
- Add flashcards to a resource
- Fetch all nested resource under a nested resource
- Fetch all notes under a resource
- Fetch all flashcards under notes
- need to do updated by users for resource
