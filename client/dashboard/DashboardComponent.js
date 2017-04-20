import React from 'react';

export default class DashboardComponent extends React.Component {

	componentWillMount () {
		console.log("coming into componentWillMount function");
	};

  render() {
    return (
      <div>
        <h1>This is DashboardComponent Component</h1>
        <p>The exercises we have here are organized in such a way that the students will concentrate on only one thing (e.g. organization, grammar, vocabulary choice, etc.) at a time. For each type of mistake, we first repeat the information presented in detail in Paragraph Development and The Essay, and then provide  a writing exercise about it. For each type,  the student first sees the original writing. Then, he corrects the writing by typing in the text box provided, and then sees the teacher-corrected version. The teacher-corrected version is only a suggestion. There may be many ways to correct a mistake. The examples given here are all original beginner level papers.</p>
      </div>
    );
  }
}