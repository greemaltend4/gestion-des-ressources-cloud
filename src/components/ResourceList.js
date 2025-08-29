import React from 'react';

function ResourceList({ resources }) {
  return (
    <div>
      <h2>Liste des Ressources</h2>
      <ul>
        {resources.map((resource) => (
          <li key={resource.id}>{resource.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResourceList;