import React from 'react';
import HighlightEditor from '../components/HighlightEditor';
import HighlightSidebar from '../components/HighlightSidebar';

'use strict';

export default React.createClass({
  render() {
    return (
      <main className='flex-container fill-container'>
        <HighlightEditor />
        <HighlightSidebar />
      </main>
    );
  }
});
