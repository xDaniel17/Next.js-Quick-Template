import { useState } from "react";

export function useExample() {
    const [value, setValue] = useState<string>("");
    // Hook de ejemplo
    return { value, setValue };
}
