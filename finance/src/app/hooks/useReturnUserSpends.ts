import { useEffect, useState } from "react";
import { returnAllUserSpends } from "../serverActions/returnAllUserSpends";

interface IReturnUserSpends {
  id: string;
  token: string;
}

export async function useReturnUserSpends({ id, token }: IReturnUserSpends) {
  const [spends, setSpends] = useState<any>([]);

  const allUserSpends = await returnAllUserSpends(id, token);

  useEffect(() => {
    setSpends(allUserSpends);
  }, [allUserSpends]);
}
