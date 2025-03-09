import { useEffect, useState } from 'react';
import { UserModel } from '../models/user-model';
import { usersApi } from '../api/users-api';
import { mapToModel } from '../dto/user-dto';

export function useUsersViewModel() {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    usersApi
      .getUsers()
      .then((users) => setUsers(users.map(mapToModel)))
      .finally(() => setLoading(false));
  }, []);

  return {
    users,
    loading,
  };
}
