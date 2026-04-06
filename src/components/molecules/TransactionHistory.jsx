/**
 * @typedef {Object} Transaction
 * @property {string} name - The name of the transaction
 * @property {string} photo - The URL of the transaction photo
 * @property {number} amount - The amount of the transaction
 * @property {boolean} isTransfer - Whether the transaction is a transfer or a send
 */
/**
 * Renders the transaction history item
 * @param {Transaction} transaction - The transaction data to be rendered
 * @returns 
 */
function TransactionHistory({ transaction }) {
  return (
    <section className="flex items-center gap-4">
      <img src={transaction.photo} alt={transaction.name} className="w-10 h-10 object-cover rounded-xl" />
      <div className="grow">
        <h4 className="text-base font-semibold text-neutral-800">{transaction.name}</h4>
        <p className="text-xs text-gray-500 mt-0.5">{transaction.isTransfer ? 'Transfer' : 'Send'}</p>
      </div>
      <div className={`text-sm font-semibold ${transaction.isTransfer ? 'text-emerald-600' : 'text-red-600'}`}>
        {transaction.isTransfer ? '+' : '-'}{transaction.amount}
      </div>
    </section>
  )
}

export default TransactionHistory