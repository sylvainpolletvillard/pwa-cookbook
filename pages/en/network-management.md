<span class="requirements">Prerequisites: read the pages <a href="optimistic-ui.md">Optimistic UI</a> and <a href="service-workers.md">Service Workers</a></span>

# Network management layer

## Different network conditions

We tend to forget that network availability is not a binary thing. In reality, and particularly on mobile, network conditions may vary a lot and show uncertainty. We can group these situations into three main categories:

- **Weak signal**: the device knows of the the bad reception quality, either in WiFi or mobile networks. There is therefore a low bandwidth and a higher risk of request failure.
- **Lie-Fi**: the device shows a working connection with good quality, but in practice, all requests fail and hang in very long timeouts. These cases of being of misinformed often occur because of problems in the network configuration or defective hardware.
- **Disconnected**: the device does not find any network connection, or has disabled them (plane mode for example). The requests are immediately rejected. This disconnected state can be detected using JavaScript on browsers that support it.

# On the necessity of a network management layer

The situations where we have uncertain network conditions are diverse and can also move from one to other in the same session.

To tackle the weak signal problem which causes long and irregular latencies, the most direct solution is [optimistic UI](optimistic-ui.md). Its principle is simple but error handling can quickly become complicated depending on the case: request stacking, retrying at growing intervals, rollback management and the re-synchronization on network recovery...

In case of Lie-Fi, the default timeouts are often insufficient to quickly react to this problem while preserving the user experience. The application must thus check the network quality by itself, based on its own constraints.

Finally, switching from connected state to disconnected state, and vice-versa, has to be handled smoothly without breaking the user experience other than a simple visual feedback. This is typically something that must be handled on a global level for the hole application.

For all these reasons, PWA are often accompanied by a **network management layer** which is inserted between the application logic and AJAX requests. It is written in JavaScript within the app bundle and the registered Service Workers. It plays the role of a conductor for the following reasons:

- By fully exploiting [the available data cache APIs](data-cache.md)
- By autonomously intercepting and managing, as much as possible, [the different network errors](error-management.md)
- By taking care of not altering the order in which asynchronous network requests are executed.
- By avoiding as much as possible the freezes and interruptions on all users' scenarios.

The network management layer involves designing different strategies and mechanisms that we will address in the following sections.

---

[Offline with Service Workers](service-workers.md)

[Network cache management strategies](network-strategies.md)

[Failed requests management strategies](error-management.md)
