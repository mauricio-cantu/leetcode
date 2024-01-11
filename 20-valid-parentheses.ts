class Stack<T> {

    private storage: T[] = [];

    pop(): T | undefined {
        return this.storage.pop();        
    }

    push(element: T): void {
        this.storage.push(element);
    }

    peek(): T | undefined {
        return this.storage[this.storage.length - 1]
    }

    size(): number {
        return this.storage.length;
    }

}

function isValid(s: string): boolean {
    const stack = new Stack<typeof s>();
    const matches = {
        '}': '{',
        ']': '[',
        ')': '(',
    }
    for (let i = 0; i < s.length; i++) {
        const character = s[i];
        if (character === '}' || character === ']' || character === ')') {
            if (stack.size() === 0) return false
            if (stack.peek() === matches[character]) {
                stack.pop()
                continue
            }
        }     
        stack.push(character)
    }    
    return stack.size() === 0;
};






