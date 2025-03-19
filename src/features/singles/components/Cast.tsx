export const Cast = ({ id, name, character }: { id: number; name: string; character: string }) => (
    <li key={id}>
      {name} as {character}
    </li>
  );