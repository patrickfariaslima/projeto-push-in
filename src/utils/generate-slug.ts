export function generateSlug (text: string): string {
    return text.toLowerCase()
        .normalize("NFD") // Normaliza os caracteres unicode para separar a letra dos acentos
        .replace(/[\u0300-\u036f]/g, "") // Remove os acentos
        .replace(/[^\w\s-]/g, "") // Remove caracteres especiais exceto -, _ e espaço
        .replace(/\s+/g, "-") // Substitui espaços por hífen
        .replace(/--+/g, "-") // Remove múltiplos hífens por apenas um
        .replace(/^-+/, "") // Remove hífens do início
        .replace(/-+$/, ""); // Remove hífens do final
}