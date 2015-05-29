# Contributing

## General Workflow

1. Fork the repo
1. Cut a namespaced feature branch from master
  - bug/...
  - feat/...
  - test/...
  - doc/...
  - refactor/...
1. Make commits to your feature branch. Prefix each commit like so:
  - (feat) Added a new feature
  - (fix) Fixed inconsistent tests [Fixes #0]
  - (refactor) ...
  - (cleanup) ...
  - (test) ...
  - (doc) ...
1. When you've finished with your fix or feature, rebase upstream changes into your branch.
1. Submit a [pull request][] directly to master. Include a description of your changes.
1. Your pull request will be reviewed by another maintainer. The point of code
   reviews is to help keep the codebase clean and of high quality and, equally
   as important, to help you grow as a programmer. If your code reviewer
   requests you make a change you don't understand, ask them why.
1. Fix any issues raised by your code reviwer, and push your fixes as a single
   new commit.
1. Once the pull request has been reviewed, it will be merged by another member of the team. Do not merge your own commits.

## Detailed Workflow

### Fork the repo

Use github’s interface to make a fork of the repo, then add that repo as an upstream remote:

```
git remote add upstream https://github.com/Eventfull/Eventfull.git
```

### Cut a namespaced feature branch from master

Your branch should follow this naming convention:
  - bug/...
  - feat/...
  - test/...
  - doc/...
  - refactor/...

These commands will help you do this:

``` bash

# Creates your branch and brings you there
git checkout -b `your-branch-name`
```

### Make commits to your feature branch.

Prefix each commit like so
  - (feat) Added a new feature
  - (fix) Fixed inconsistent tests [Fixes #0]
  - (refactor) ...
  - (cleanup) ...
  - (test) ...
  - (doc) ...

Make changes and commits on your branch, and make sure that you
only make changes that are relevant to this branch. If you find
yourself making unrelated changes, make a new branch for those
changes.

#### Commit Message Guidelines

- Commit messages should be written in the present tense; e.g. "Fix continuous
  integration script".
- The first line of your commit message should be a brief summary of what the
  commit changes. Aim for about 70 characters max. Remember: This is a summary,
  not a detailed description of everything that changed.
- If you want to explain the commit in more depth, following the first line should
  be a blank line and then a more detailed description of the commit. This can be
  as detailed as you want, so dig into details here and keep the first line short.

### Rebase upstream changes into your branch

Once you are done making changes, you can begin the process of getting
your code merged into the main repo. Step 1 is to merge changes to the
upstream master branch into your master branch by running this command
from your master branch:

```bash
git pull upstream master
```
If you did all your development in a separate feature branch, there should
not be any merge conflicts. If there are, resolve them before moving on
so that your local master branch is up to date with the upstream master.

Now prepare to get the up-to-date changes in master into your feature
branch by rebasing. To protect your work in case the rebasing doesn't
work out as you expect, create a 'quarantine' branch from your feature
branch. You will use this new branch solely for rebasing.

From your new quarantine branch, run the following command to rebase
changes from master:

```bash
git rebase master
```

You might run into conflicts here. If there are conflicting changes, git
will start yelling at you part way through the rebasing process. Git will
pause rebasing to allow you to sort out the conflicts. You do this the same
way you solve merge conflicts, by checking all of the files git says have
been changed in both histories and picking the versions you want. <!-- Be aware
that these changes will show up in your pull request, so try and incorporate
upstream changes as much as possible. -->

You pick a file by `git add`ing it - you do not make commits during a
rebase.

Once you are done fixing conflicts for a specific commit, run:

```bash
git rebase --continue
```

This will continue the rebasing process. Once you are done fixing all
conflicts you should run the existing tests to make sure you didn’t break
anything, then run your new tests (there are new tests, right?) and
make sure they work also.

If rebasing broke anything, fix it, then repeat the above process until
you get here again and nothing is broken and all the tests pass.

Once everything looks good, we run rebase again from the quarantine branch
in order to compress the commit history. This allows your pull request to
contain only one commit.

First find the sha1 of the most recent commit from upstream master. Make
sure you have this commit in your local master. If you don't, it means that
someone has committed a change since you last pulled from master and you need
to pull them into your local master (following the steps we just laid out).

Once you have the sha1 of the most recent upstream master commit, run this
command to 'squish' the commits between that commit and your most recent
commit into a single commit (do not forget the i!):

```bash
git rebase -i <sha1>
```
Running this command pops up a text editor with a list of the commit messages
between the commit for the sha1 you entered and your most recent commit. Choose
to 'pick' the first commit and 'squash' the others (git will display more info
in your text editor on how this works). Don't worry about the text of the message
itself. Save and close the file when you are done.

Git will pop up another text editor right away. This is where you add the actual
commit message for the commit in your pull request. Make sure it conforms to the
guidelines above. Save and close.

Review your git history to make sure it looks good. If it does, push your commit
to your remote fork (origin):

```bash
git push origin quarantine --force
```

### Make a pull request

Make a clear pull request from your fork and branch to the upstream master
branch, detailing exactly what changes you made and what feature this
should add. The clearer your pull request is the faster you can get
your changes incorporated into this repo.

At least one other person MUST give your changes a code review, and once
they are satisfied they will merge your changes into upstream. Alternatively,
they may have some requested changes. You should make more commits to your
branch to fix these, then follow this process again from rebasing onwards.

Once you get back here, make a comment requesting further review and
someone will look at your code again. If they like it, it will get merged,
else, just repeat again.

Thanks for contributing!

### Guidelines

1. Uphold the current code standard:
    - Keep your code [DRY][].
    - Apply the [boy scout rule][].
    - Follow [STYLE-GUIDE.md](STYLE-GUIDE.md)
2. Run the [tests][] before submitting a pull request.
3. Tests are very, very important. Submit tests if your pull request contains
   new, testable behavior.
4. Your pull request is comprised of a single ([squashed][]) commit.

## Checklist:

This is just to help you organize your process

- [ ] Did I cut my work branch off of master (don't cut new branches from existing feature brances)?
- [ ] Did I follow the correct naming convention for my branch?
- [ ] Is my branch focused on a single main change?
 - [ ] Do all of my changes directly relate to this change?
- [ ] Did I rebase the upstream master branch after I finished all my
  work?
- [ ] Did I write a clear pull request message detailing what changes I made?
- [ ] Did I get a code review?
 - [ ] Did I make any requested changes from that code review?

If you follow all of these guidelines and make good changes, you should have
no problem getting your changes merged in.