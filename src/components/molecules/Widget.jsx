/**
 * @typedef {Object} WidgetProps
 * @property {string} name - The name of the widget.
 * @property {string|number} content - The main content to be displayed in the widget.
 * @property {FooterInfo} footer - An object containing footer information.
 */
/**
 * @typedef {Object} FooterInfo
 * @property {string} growth - The growth percentage or value to be displayed in the footer.
 * @property {string} color - The CSS class for the color of the growth text (e.g., "text-green-500" for positive growth, "text-red-500" for negative growth).
 * @property {string} [time] - Optional time information to be displayed next to the growth value (e.g., "3 Days Ago").
 */
/**
 * @param {Object} props
 * @param {WidgetProps} props.widget - The widget data to be displayed.
 * @returns {JSX.Element}
 */
function Widget({ widget }) {
  const { name, content, footer } = widget;
  return (
    <section className="flex flex-col gap-3 p-4 bg-white border border-gray-200 sm:p-6">
      <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
        <div className="text-xl text-blue-600">
          <widget.icon />
        </div>
        <span>{name}</span>
      </div>
      <h2 className="text-lg font-semibold sm:text-2xl">{content}</h2>
      <p className={`flex items-center gap-1 text-sm font-medium ${footer.color}`}>
        {footer.growth} <footer.icon /> {footer.time && <span className="ml-1">{footer.time}</span>}
      </p>
    </section>
  )
}

export default Widget