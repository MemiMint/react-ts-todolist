import { useState } from "react";

export const useCustomInput = (type: string) => {
    const [_type, setType] = useState<string>(type);

    const onToggleInputType = (type: "email" | "text" | "password") => {
        setType(type);
    }

    return {
        _type,
        onToggleInputType
    }
}