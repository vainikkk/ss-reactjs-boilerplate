export const hydrateUsers = (data) => data.map((d) => hydrateUser(d));

export const hydrateUser = (data) => {
  return {
    id: data.id,
    name: data.name,
    email: data.email,
    website: data.website,
  };
};
