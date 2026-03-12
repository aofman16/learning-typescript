# TypeScript'te Fonksiyon Yazımı ve Tipleri

## Basit Fonksiyonlar
```typescript
function greet(name: string): string {
    return `Merhaba, ${name}!`;
}
```

## Parametreler
```typescript
function add(a: number, b: number): number {
    return a + b;
}
```

## Opsiyonel Parametreler
```typescript
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Merhaba, ${name}!`;
}
```

## Varsayılan Değerler
```typescript
function multiply(a: number, b: number = 1): number {
    return a * b;
}
```

## Rest Parametreleri
```typescript
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
```

## Arrow Fonksiyonları
```typescript
const square = (n: number): number => n * n;
```

## Fonksiyon Tipleri
```typescript
type Operation = (x: number, y: number) => number;

const add: Operation = (x, y) => x + y;
```
